import {XShaderBase} from "./base.ts";
import {
  XUniform2fv,
  XUniform4fv,
  XUniformArray,
  XUniformBool,
  XUniformFloat,
  XUniformInt,
  XUniformTexture
} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";
import {Tools} from "../../util/Tools.ts";

export class XSurfaceShaderBaseBase extends XShaderBase {

  invResolution!: XUniformArray
  invAspectRatio!: XUniformFloat
  velocityBoundaryEnabled!: XUniformBool
  vertexPosition!: XAttribute

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const invResolution = new XUniformArray(this.gl, 'invResolution', null, 0, 0)
    this.invResolution = invResolution
    this._uniforms.push(invResolution)

    const invAspectRatio = new XUniformFloat(this.gl, 'invAspectRatio', null, 0)
    this.invAspectRatio = invAspectRatio
    this._uniforms.push(invAspectRatio)

    const velocityBoundaryEnabled = new XUniformBool(this.gl, 'velocityBoundaryEnabled', null, false)
    this.velocityBoundaryEnabled = velocityBoundaryEnabled
    this._uniforms.push(velocityBoundaryEnabled)

    const pos = new XAttribute('vertexPosition', 0 ,2)
    this.vertexPosition = pos
    this._attributes.push(pos)

    this._aStride += 8
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
uniform vec2 invResolution;
uniform float invAspectRatio;
varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  vec2 clipSpace = 2.0*texelCoord - 1.0;
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
  gl_Position = vec4(clipSpace, 0.0, 1.0 );
}`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`;
  }
}

class XSurfaceShaderBase extends XSurfaceShaderBaseBase {

  surface!: XUniformTexture
  dt!: XUniformFloat
  dx!: XUniformFloat

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const surface = new XUniformTexture(this.gl, 'surface', null, false)
    this.surface = surface
    this._uniforms.push(surface)

    const dt = new XUniformFloat(this.gl, 'dt', null)
    this.dt = dt
    this._uniforms.push(dt)

    const dx = new XUniformFloat(this.gl, 'dx', null)
    this.dx = dx
    this._uniforms.push(dx)
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`;
  }
}

export class XSurfaceShader extends XSurfaceShaderBase {
  enableUserVelocity?: string
  decayFactor!: XUniformFloat
  time_s!: XUniformFloat
  userVelocityTexture!: XUniformTexture
  backgroundTexture!: XUniformTexture
  pointerPositions!: XUniform4fv
  pointerData!: XUniform2fv
  activePointerCount!: XUniformInt
  backgroundMultiplier!: XUniformFloat

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
    this.createProperties();
  }

  set_enableUserVelocity(velocity: string) {
    this.enableUserVelocity = velocity;
    this._fragSource = Tools.injectConstValue(this._fragSource, 'enableUserVelocity', velocity) ?? ''
    if (this._ready) {
      this.destroy();
    }
    return velocity
  }

  createProperties() {
    super.createProperties();
    const decayFactor = new XUniformFloat(this.gl, 'decayFactor', null)
    this.decayFactor = decayFactor
    this._uniforms.push(decayFactor)

    const time_s = new XUniformFloat(this.gl, 'time_s', null)
    this.time_s = time_s
    this._uniforms.push(time_s)

    const userVelocityTexture = new XUniformTexture(this.gl, 'userVelocityTexture', null, false)
    this.userVelocityTexture = userVelocityTexture
    this._uniforms.push(userVelocityTexture)

    const backgroundTexture = new XUniformTexture(this.gl, 'backgroundTexture', null, false)
    this.backgroundTexture = backgroundTexture
    this._uniforms.push(backgroundTexture)

    const pointerPositions = new XUniform4fv(this.gl, 'pointerPositions', null, 10)
    this.pointerPositions = pointerPositions
    this._uniforms.push(pointerPositions)

    const pointerData = new XUniform2fv(this.gl, 'pointerData', null, 10)
    this.pointerData = pointerData
    this._uniforms.push(pointerData)

    const activePointerCount = new XUniformInt(this.gl, 'activePointerCount', null)
    this.activePointerCount = activePointerCount
    this._uniforms.push(activePointerCount)

    const backgroundMultiplier = new XUniformFloat(this.gl, 'backgroundMultiplier', null)
    this.backgroundMultiplier = backgroundMultiplier
    this._uniforms.push(backgroundMultiplier)
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`;
    const a: string[] = [];
    function handlePointer(pointerIndex: number): string {
      return `
    if (activePointerCount > ${pointerIndex}) {
        vec2 pointer = pointerPositions[${pointerIndex}].xy;
        vec2 lastFramePointer = pointerPositions[${pointerIndex}].zw;
        float pressure = pointerData[${pointerIndex}].y;
        float radius = pointerData[${pointerIndex}].x;

        vec2 velocity = (pointer - lastFramePointer) / dt;
        float speed = length(velocity);

        float fp; // fractional projection
        float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

        float R = radius + pressure * pressure * 0.1;

        float x = clamp(1.0 - dist * dist / R, 0., 1.);

        vec3 hsv = rgb2hsv(backgroundSample.rgb);
        hsv.y = pow(hsv.y, 0.35);
        vec3 rgb = hsv2rgb(hsv);

        color.rgb += min(
            brightnessContrast(
                rgb,
                0., // brightness
                1.0 // contrast
            )
            * x * 8. * (speed * 1. + 2.) * dt,
            vec3(1.)
        );
    }
    `;
    }

    for (let i = 0; i < 10; i++) {
      a.push(handlePointer(i));
    }

    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;

float distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){
  vec2 d = p - a;
  vec2 x = b - a;

  fp = 0.0; 
  float lx = length(x);
  
  if(lx <= 0.0001) return length(d);

  float projection = dot(d, x / lx); 

  fp = projection / lx;

  if(projection < 0.0)            return length(d);
  else if(projection > length(x)) return length(p - b);
  return sqrt(abs(dot(d,d) - projection*projection));
}

float distanceToSegment(vec2 a, vec2 b, vec2 p){
    float fp;
    return distanceToSegment(a, b, p, fp);
}
vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}

uniform float decayFactor;
uniform float time_s;
uniform sampler2D userVelocityTexture;
uniform sampler2D backgroundTexture;

uniform vec4 pointerPositions[10];

uniform vec2 pointerData[10];
uniform int activePointerCount;
uniform float backgroundMultiplier;

const bool enableUserVelocity = false;
  
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
  
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main(){  
    vec4 color = texture2D(surface, texelCoord);
    vec4 backgroundSample = texture2D(backgroundTexture,
      texelCoord + vec2(
        0.5 * sin(time_s * 0.1),
        0.5 * cos(time_s * 0.1)
      )
    );
    
    vec4 dColor = backgroundSample * backgroundMultiplier - color;
    color += dColor * clamp(decayFactor * dt, 0., 1.0);
    if (enableUserVelocity) {
        vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
        float v = length(userVelocity);
        float vdt = v * dt;
      
      color.rgb += vec3(vdt) * 0.1;
    }
    
    ` + a.join('\n') + `
    gl_FragColor = color;
  }
`;
  }
}

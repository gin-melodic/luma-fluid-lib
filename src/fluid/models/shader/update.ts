import {XSurfaceShaderBaseBase} from "./surface.ts";
import {XUniform2fv, XUniform4fv, XUniformArray, XUniformFloat, XUniformInt, XUniformTexture} from "../XUniform.ts";
import {Tools} from "../../util/Tools.ts";
import {ShareConstants} from "../../constant.ts";

class XUpdateSurfaceBase extends XSurfaceShaderBaseBase {
  velocity!: XUniformTexture
  dt!: XUniformFloat
  dx!: XUniformFloat

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
  }

  createProperties() {
    super.createProperties();
    const velocity = new XUniformTexture(this.gl, "velocity", null, false);
    this.velocity = velocity;
    this._uniforms.push(velocity);

    const dt = new XUniformFloat(this.gl, "dt", null);
    this.dt = dt;
    this._uniforms.push(dt);

    const dx = new XUniformFloat(this.gl, "dx", null);
    this.dx = dx;
    this._uniforms.push(dx);
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

uniform sampler2D velocity;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`;
  }
}

export class XUpdateForceShader extends XUpdateSurfaceBase {
  time_s!: XUniformFloat
  userVelocityTexture!: XUniformTexture
  lumaLogoTexture!: XUniformTexture
  decayFactor!: XUniformFloat
  dragCoefficient!: XUniformFloat
  dragSpeed!: XUniformFloat
  pointerPositions!: XUniform4fv
  pointerData!: XUniform2fv
  activePointerCount!: XUniformInt
  opticalFlowExponent!: XUniformFloat
  gravity!: XUniformArray
  viewportAspectRatio!: XUniformFloat
  enableUserVelocity?: string
  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl);
    this.createProperties();
  }

  set_enableUserVelocity(a: string) {
    this.enableUserVelocity = a;
    this._fragSource = Tools.injectConstValue(this._fragSource, "enableUserVelocity", a) ?? '';
    if (this._ready) {
      this.destroy();
    }
    return a;
  }

  set_enableVelocityBoundary(velocity: string) {
    this.enableUserVelocity = velocity;
    this._fragSource = Tools.injectConstValue(this._fragSource, "enableUserVelocity", velocity) ?? '';
    if (this._ready) {
      this.destroy();
    }
    return velocity
  }

  createProperties() {
    super.createProperties();
    const timeS = new XUniformFloat(this.gl, "time_s", null);
    this.time_s = timeS;
    this._uniforms.push(timeS);

    const userVelocityTexture = new XUniformTexture(this.gl, "userVelocityTexture", null, false);
    this.userVelocityTexture = userVelocityTexture;
    this._uniforms.push(userVelocityTexture);

    const lumaLogoTexture = new XUniformTexture(this.gl, "lumaLogoTexture", null, false);
    this.lumaLogoTexture = lumaLogoTexture;
    this._uniforms.push(lumaLogoTexture);

    const decayFactor = new XUniformFloat(this.gl, "decayFactor", null);
    this.decayFactor = decayFactor;
    this._uniforms.push(decayFactor);

    const dragCoefficient = new XUniformFloat(this.gl, "dragCoefficient", null);
    this.dragCoefficient = dragCoefficient;
    this._uniforms.push(dragCoefficient);

    const dragSpeed = new XUniformFloat(this.gl, "dragSpeed", null);
    this.dragSpeed = dragSpeed;
    this._uniforms.push(dragSpeed);

    const pointerPositions = new XUniform4fv(this.gl, "pointerPositions", null, 10);
    this.pointerPositions = pointerPositions;
    this._uniforms.push(pointerPositions);

    const pointerData = new XUniform2fv(this.gl, "pointerData", null, 10);
    this.pointerData = pointerData;
    this._uniforms.push(pointerData);

    const activePointerCount = new XUniformInt(this.gl, "activePointerCount", null);
    this.activePointerCount = activePointerCount;
    this._uniforms.push(activePointerCount);

    const opticalFlowExponent = new XUniformFloat(this.gl, "opticalFlowExponent", null);
    this.opticalFlowExponent = opticalFlowExponent;
    this._uniforms.push(opticalFlowExponent);

    const gravity = new XUniformArray(this.gl, "gravity", null);
    this.gravity = gravity;
    this._uniforms.push(gravity);

    const viewportAspectRatio = new XUniformFloat(this.gl, "viewportAspectRatio", null);
    this.viewportAspectRatio = viewportAspectRatio;
    this._uniforms.push(viewportAspectRatio);
  }

  initSources() {
    this._vertSource += `#ifdef GL_ES
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
    const a: string[] = []
    function handlePointer(pointerIndex: number) {
      return `
        if (activePointerCount > ${pointerIndex}) {
            vec2 pointer = pointerPositions[${pointerIndex}].xy;
            vec2 lastFramePointer = pointerPositions[${pointerIndex}].zw;
            float radius = pointerData[${pointerIndex}].x;
            float pressure = pointerData[${pointerIndex}].y;

            vec2 velocity = (pointer - lastFramePointer) / dt;
            float speed = length(velocity);

            float fp; // fractional projection
            float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

            float taperFactor = 0.6; // 1 => 0 at lastMouse, 0 => no tapering
            float projectedFraction = 1.0 - clamp(fp, 0.0, 1.0) * taperFactor;

            float R = radius * 0.5 + pressure * pressure * pressure * 0.1;

            float m = exp(-dist/R) * dragCoefficient; // drag coefficient
            m *= projectedFraction * projectedFraction;

            vec2 targetVelocity = velocity * dx * dragSpeed * dt * 60.;
            v += (targetVelocity - v) * m;
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

uniform sampler2D velocity;
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
vec3 mod289(vec3 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 mod289(vec4 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.)+1.)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159-.85373472095314*r;
}

float snoise(vec3 v) {
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    
    i=mod289(i);
    vec4 p=permute(permute(permute(
        i.z+vec4(0.,i1.z,i2.z,1.))
        +i.y+vec4(0.,i1.y,i2.y,1.))
        +i.x+vec4(0.,i1.x,i2.x,1.));
    
    float n_=.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;
    p1*=norm.y;
    p2*=norm.z;
    p3*=norm.w;
    
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),
    dot(p2,x2),dot(p3,x3)));
}

vec3 snoiseVec3(vec3 x){
    float s=snoise(vec3(x));
    float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));
    float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));
    vec3 c=vec3(s,s1,s2);
    return c;
}

vec3 curlNoise(vec3 p){
    const float e=.1;
    vec3 dx=vec3(e,0.,0.);
    vec3 dy=vec3(0.,e,0.);
    vec3 dz=vec3(0.,0.,e);
    
    vec3 p_x0=snoiseVec3(p-dx);
    vec3 p_x1=snoiseVec3(p+dx);
    vec3 p_y0=snoiseVec3(p-dy);
    vec3 p_y1=snoiseVec3(p+dy);
    vec3 p_z0=snoiseVec3(p-dz);
    vec3 p_z1=snoiseVec3(p+dz);
    
    float x=p_y1.z-p_y0.z-p_z1.y+p_z0.y;
    float y=p_z1.x-p_z0.x-p_x1.z+p_x0.z;
    float z=p_x1.y-p_x0.y-p_y1.x+p_y0.x;
    
    return normalize(vec3(x,y,.5));
}
    uniform float time_s;
    uniform sampler2D userVelocityTexture;
    uniform sampler2D lumaLogoTexture;
    uniform float decayFactor;
    uniform float dragCoefficient;
    uniform float dragSpeed;
    
    uniform vec4 pointerPositions[10];
    
    uniform vec2 pointerData[10];
    uniform int activePointerCount;
    uniform float opticalFlowExponent;
    uniform vec2 gravity;
    uniform float viewportAspectRatio;
    const bool enableUserVelocity = false;
    ` + ShareConstants.SAMPLE_LOGO_TEXTURE_GLSL +
      `
    void main(){
        vec2 v = texture2D(velocity, texelCoord).xy;
        
        
        
        vec2 targetVelocity = gravity;
        
        {
            vec2 dv = targetVelocity - v;
            v += dv * clamp(decayFactor * dt, 0., 1.0);
        }
        
        #if 1
        {
            vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
            float sign = -(lumaLogoSample.b * 2.0 - 1.0);
            float gradientX = lumaLogoSample.r * sign;
            float gradientY = lumaLogoSample.g * sign;
            float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
            
            vec2 logoTargetVelocity = mix(-v, v, centerHeight * lumaLogoSample.a);
            vec2 dv = logoTargetVelocity - v;
            v += dv * clamp(5. * dt, 0., 1.0);
        }
        #endif
        
        if (enableUserVelocity) {
            vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
            float l = length(userVelocity + 0.000001);
            float lE = pow(abs(l), opticalFlowExponent);
            v += userVelocity * (lE/l);
        }
        v += curlNoise(vec3(texelCoord, time_s * 0.1)).xy * 0.01;
        v += curlNoise(vec3(texelCoord * 2., (time_s - 20.0) * 0.1)).xy * 0.02;
` + a.join('\n') + `
        gl_FragColor = vec4(v, 0, 1.);
    }
`;
  }
}

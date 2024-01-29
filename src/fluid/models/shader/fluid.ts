import {XShaderBase} from "./base.ts";
import {XUniformFloat, XUniformTexture} from "../XUniform.ts";
import {XAttribute} from "../XAttribute.ts";
import {ShareConstants} from "../../constant.ts";

export class XFluidShader extends XShaderBase {
  texture!: XUniformTexture
  lumaLogoTexture!: XUniformTexture
  invGamma!: XUniformFloat
  time_s!: XUniformFloat
  refraction!: XUniformFloat
  chromaticAberration!: XUniformFloat
  innerDarkening!: XUniformFloat
  gradientBackground!: XUniformFloat
  viewportAspectRatio!: XUniformFloat
  vertexPosition!: XAttribute

  constructor(gl: WebGL2RenderingContext | WebGLRenderingContext) {
    super(gl)
    this.createProperties()
  }

  createProperties() {
    super.createProperties();
    const texture = new XUniformTexture(this.gl, "texture", null, false);
    this.texture = texture;
    this._uniforms.push(texture);

    const lumaLogoTexture = new XUniformTexture(this.gl, "lumaLogoTexture", null, false);
    this.lumaLogoTexture = lumaLogoTexture;
    this._uniforms.push(lumaLogoTexture);

    const invGamma = new XUniformFloat(this.gl, "invGamma", null);
    this.invGamma = invGamma;
    this._uniforms.push(invGamma);

    const time_s = new XUniformFloat(this.gl, "time_s", null);
    this.time_s = time_s;
    this._uniforms.push(time_s);

    const refraction = new XUniformFloat(this.gl, "refraction", null);
    this.refraction = refraction;
    this._uniforms.push(refraction);

    const chromaticAberration = new XUniformFloat(this.gl, "chromaticAberration", null);
    this.chromaticAberration = chromaticAberration;
    this._uniforms.push(chromaticAberration);

    const innerDarkening = new XUniformFloat(this.gl, "innerDarkening", null);
    this.innerDarkening = innerDarkening;
    this._uniforms.push(innerDarkening);

    const gradientBackground = new XUniformFloat(this.gl, "gradientBackground", null);
    this.gradientBackground = gradientBackground;
    this._uniforms.push(gradientBackground);

    const viewportAspectRatio = new XUniformFloat(this.gl, "viewportAspectRatio", null);
    this.viewportAspectRatio = viewportAspectRatio;
    this._uniforms.push(viewportAspectRatio);

    const vertexPosition = new XAttribute("vertexPosition", 0, 2);
    this.vertexPosition = vertexPosition;
    this._attributes.push(vertexPosition);

    this._aStride += 8;
  }

  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
varying vec2 texelCoord;

void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
}
`;
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

const float gamma = 2.1;

vec3 toLinear(vec3 v){
    return pow(v,vec3(gamma));
}

vec4 toLinear(vec4 v){
    return vec4(toLinear(v.rgb),v.a);
}

vec3 toGamma(vec3 v){
    return pow(v,vec3(1./gamma));
}

vec4 toGamma(vec4 v){
    return vec4(toGamma(v.rgb),v.a);
}

vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}
uniform sampler2D texture;
uniform sampler2D lumaLogoTexture;
uniform float invGamma;
uniform float time_s;
uniform float refraction;
uniform float chromaticAberration;
uniform float innerDarkening;
uniform float gradientBackground;
uniform float viewportAspectRatio;
varying vec2 texelCoord;
` + ShareConstants.SAMPLE_LOGO_TEXTURE_GLSL + `
void main(void){
    vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
    
    #if 0
    float centerHeight = lumaLogoSample.r;
    
    float gradientX = dFdx(centerHeight);
    float gradientY = dFdy(centerHeight);
    
    #elif 0
    float centerHeight = lumaLogoSample.r;
    
    
    float leftHeight = texture2D(lumaLogoTexture, texelCoord - vec2(invResolution.x, 0.0)).r;
    float rightHeight = texture2D(lumaLogoTexture, texelCoord + vec2(invResolution.x, 0.0)).r;
    float downHeight = texture2D(lumaLogoTexture, texelCoord - vec2(0.0, invResolution.y)).r;
    float upHeight = texture2D(lumaLogoTexture, texelCoord + vec2(0.0, invResolution.y)).r;
    float gradientX = ((rightHeight - centerHeight) + (centerHeight - leftHeight)) * 0.5;
    float gradientY = ((upHeight - centerHeight) + (centerHeight - downHeight)) * 0.5;
    
    #elif 1
    float sign = -(lumaLogoSample.b * 2.0 - 1.0);
    float gradientX = lumaLogoSample.r * sign;
    float gradientY = lumaLogoSample.g * sign;
    float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
    #endif    
    
    vec3 surfaceNormal = vec3(gradientX, gradientY, 1.0);
    vec2 refractionOffset = surfaceNormal.xy * refraction;
    vec2 texelCoordRefracted = texelCoord + refractionOffset;
    vec4 sample = vec4(
        texture2D(texture, texelCoordRefracted + refractionOffset * chromaticAberration).r,
        texture2D(texture, texelCoordRefracted).g,
        texture2D(texture, texelCoordRefracted - refractionOffset * chromaticAberration).b,
        1.0
    );
    float innerDarkeningFactor = mix(smoothstep(1.0, 0.5, centerHeight), 1.0, 1.0 - innerDarkening);
    
    vec2 gradientDirection = vec2(0.5, 0.5);
    float g = sin(dot(gradientDirection, texelCoord + refractionOffset) * 8. + time_s * 0.5) * 0.5 + 0.5;
    g *= gradientBackground * (1. - centerHeight * 0.9);
    gl_FragColor = vec4(
        (
            (sample.rgb * (g * 2. + 1.))
            * innerDarkeningFactor
            + g * 0.25
        )
        * pow(centerHeight, 0.05) 
        * lumaLogoSample.a 
        , 
        1.0
    );
}
`;
  }
}

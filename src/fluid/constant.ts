import {XDict} from "./models/XDict.ts";

export const ShareConstants = {
  STORAGE_QUALIFIER_TYPE: (() => {
    const sqType = new XDict<string[]>()
    sqType.content.set("const", ["bool", "int", "float", "vec2", "vec3", "vec4", "bvec2", "bvec3", "bvec4", "ivec2", "ivec3", "ivec4", "mat2", "mat3", "mat4"]);
    sqType.content.set("attribute", ["float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4"]);
    sqType.content.set("uniform", ["bool", "int", "float", "vec2", "vec3", "vec4", "bvec2", "bvec3", "bvec4", "ivec2", "ivec3", "ivec4", "mat2", "mat3", "mat4", "sampler2D", "samplerCube"]);
    sqType.content.set("varying", ["float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4"]);
    return sqType
  })(),

  PRECISION_QUALIFIERS: ["lowp", "mediump", "highp"],
  SAMPLE_LOGO_TEXTURE_GLSL: `
vec4 sampleLumaLogoTexture(vec2 uv) {
    // fraction of viewport
    float displayWidth = 0.8;
    float aspectRatio = 2048.0/582.0;
    // we want to display the texture at this width in the center of the viewport
    // we workout a new uv coordinate that will sample the texture at this width
    vec2 uvClip = uv * 2. - 1.;
    // scale up to display width
    uvClip /= displayWidth;
    // correct aspect ratio
    uvClip.y *= aspectRatio / viewportAspectRatio;
    vec2 uvCentered = uvClip * .5 + .5;
    // if out of bounds, return 0
    if (uvCentered.x < 0. || uvCentered.x > 1. || uvCentered.y < 0. || uvCentered.y > 1.) {
        return vec4(0.);
    }
    return texture2D(lumaLogoTexture, uvCentered);
}  
  `,
}

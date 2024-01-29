export const FRAGMENT_SHADER_INIT = `#define STANDARD
#ifdef PHYSICAL
    #define IOR
    #define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
    uniform float ior;
#endif
#ifdef USE_SPECULAR
    uniform float specularIntensity;
    uniform vec3 specularColor;
    #ifdef USE_SPECULAR_COLORMAP
        uniform sampler2D specularColorMap;
    #endif
    #ifdef USE_SPECULAR_INTENSITYMAP
        uniform sampler2D specularIntensityMap;
    #endif
#endif
#ifdef USE_CLEARCOAT
    uniform float clearcoat;
    uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
    uniform float iridescence;
    uniform float iridescenceIOR;
    uniform float iridescenceThicknessMinimum;
    uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
    uniform vec3 sheenColor;
    uniform float sheenRoughness;
    #ifdef USE_SHEEN_COLORMAP
        uniform sampler2D sheenColorMap;
    #endif
    #ifdef USE_SHEEN_ROUGHNESSMAP
        uniform sampler2D sheenRoughnessMap;
    #endif
#endif
#ifdef USE_ANISOTROPY
    uniform vec2 anisotropyVector;
    #ifdef USE_ANISOTROPYMAP
        uniform sampler2D anisotropyMap;
    #endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>

uniform sampler2D sceneMap;
uniform sampler2D blurMap;
uniform bool sceneMapGammaDecode;
uniform vec2 viewportResolution;
uniform vec2 blurEdges;
uniform vec4 uiMetalRoughIridescenceIOR;

void main() {
    vec2 screenUv = gl_FragCoord.xy / viewportResolution;
    
    vec4 sampledDiffuseColor = texture2D( sceneMap, screenUv );
    vec4 sampledBlurColor = texture2D( blurMap, screenUv );
    #if defined( USE_MAP )
    vec4 sampledUiColor = texture2D( map, vMapUv );
    #endif
    
    vec4 diffuseColor = vec4( diffuse, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;
    
    // include <map_fragment> {
    #ifdef USE_MAP
    {
        float vUvRadius = length(vUv);
        float blurRegionAlpha = smoothstep(blurEdges.x, blurEdges.y, vUvRadius);
        sampledDiffuseColor.rgb = mix(
            sampledDiffuseColor.rgb,
            sampledBlurColor.rgb,
            blurRegionAlpha
        ) * smoothstep(1.0, 0.4, vUvRadius * 0.9); // vignette
        
        // convert to linear space
        if (sceneMapGammaDecode) {
            sampledDiffuseColor.rgb = pow(sampledDiffuseColor.rgb, vec3(2.2));
    }
        
        // blend in ui layer
        #if defined( USE_MAP )
        sampledDiffuseColor.rgb = mix(sampledDiffuseColor.rgb, sampledUiColor.rgb * sampledUiColor.a, sampledUiColor.a);
        #endif
        
        diffuseColor *= sampledDiffuseColor;
}
    #endif
    // }
    
    // include <color_fragment> {
    #if defined( USE_COLOR_ALPHA )
        diffuseColor *= vColor;
    #elif defined( USE_COLOR )
        diffuseColor.rgb *= vColor;
    #endif
    // }
    
    // include <roughnessmap_fragment> {
    float roughnessFactor = roughness;
    #ifdef USE_ROUGHNESSMAP
        vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
        // reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
        roughnessFactor *= texelRoughness.g;
    #endif
    // }
    
    // include <metalnessmap_fragment> {
    float metalnessFactor = metalness;
    #ifdef USE_METALNESSMAP
        vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
        // reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
        metalnessFactor *= texelMetalness.b;
    #endif
    // }
    
    #if defined( USE_MAP )
    metalnessFactor = mix(metalnessFactor, uiMetalRoughIridescenceIOR.x, sampledUiColor.a);
    roughnessFactor = mix(roughnessFactor, uiMetalRoughIridescenceIOR.y, sampledUiColor.a);
    #endif
    
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <clearcoat_normal_fragment_begin>
    #include <clearcoat_normal_fragment_maps>
    #include <emissivemap_fragment>
    #include <lights_physical_fragment>
    
    #if defined( USE_MAP ) && defined( USE_IRIDESCENCE )
    material.iridescence = mix(material.iridescence, uiMetalRoughIridescenceIOR.z, sampledUiColor.a);
    material.iridescenceIOR = mix(material.iridescenceIOR, uiMetalRoughIridescenceIOR.w, sampledUiColor.a);
    material.clearcoat = mix(material.clearcoat, 0.0, sampledUiColor.a);
    #endif
    
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>
    
    vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
    vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    
    vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
    
    #ifdef USE_SHEEN
        float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
        outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
    #endif
    
    #ifdef USE_CLEARCOAT
        float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
        vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
        outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
    #endif
    
    // include <opaque_fragment> {
    #ifdef OPAQUE
        diffuseColor.a = 1.0;
    #endif
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    // }
    
    // blend in ui layer, out of PBR
    // #if defined( USE_MAP )
    // gl_FragColor.rgb = mix(gl_FragColor.rgb, sampledUiColor.rgb, sampledUiColor.a);
    // #endif
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>
}`

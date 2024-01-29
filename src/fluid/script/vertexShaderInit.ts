export const VERTEX_SHADER_INIT = `#define STANDARD
  varying vec3 vViewPosition;
  #ifdef USE_TRANSMISSION
      varying vec3 vWorldPosition;//
  #endif
  #include <common>
  #include <uv_pars_vertex>
  #include <color_pars_vertex>
  #include <normal_pars_vertex>
  
  void main() {
        #include <uv_vertex>
        #include <color_vertex>
        #include <beginnormal_vertex>
        #include <defaultnormal_vertex>
        #include <normal_vertex>
        #include <begin_vertex>
        #include <project_vertex>
        vViewPosition = - mvPosition.xyz;
        #include <worldpos_vertex>
  }`

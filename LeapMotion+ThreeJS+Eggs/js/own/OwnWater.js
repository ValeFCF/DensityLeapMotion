var lastTime = (new Date()).getTime();

var Water =
{
  Initialize: function () {
    //this.ms_Camera.position.set(450, 350, 450);

    var gsize = 4;
    var res = 8;
    var gres = res / 2;
    var origx = -gsize / 2;
    var origz = -gsize / 2;
    this.ms_Ocean = new THREE.Ocean(renderer, camera, scene,
    {
      USE_HALF_FLOAT : 'half-float',
      INITIAL_SIZE : 500.0,
      INITIAL_WIND : [10.0, 10.0],
      INITIAL_CHOPPINESS : 4.0,
      CLEAR_COLOR : [1.0, 1.0, 1.0, 0.0],
      GEOMETRY_ORIGIN : [origx, origz],
      SUN_DIRECTION : [1.0, 1.0, 1.0],
      OCEAN_COLOR: new THREE.Vector3(0.03, 0.02, 0.05),
      SKY_COLOR: new THREE.Vector3(3.2, 9.6, 12.8),
      EXPOSURE : 0.4,
      GEOMETRY_RESOLUTION: gres,
      GEOMETRY_SIZE : gsize,
      RESOLUTION : res
    });
    this.ms_Ocean.materialOcean.uniforms.u_projectionMatrix = { type: "m4", value: camera.projectionMatrix };
    this.ms_Ocean.materialOcean.uniforms.u_viewMatrix = { type: "m4", value: camera.matrixWorldInverse };
    this.ms_Ocean.materialOcean.uniforms.u_cameraPosition = { type: "v3", value: camera.position };
    scene.add(this.ms_Ocean.oceanMesh);

  },

  Update: function () {
    var currentTime = new Date().getTime();
    this.ms_Ocean.deltaTime = (currentTime - lastTime) / 1000 || 0.0;
    lastTime = currentTime;
    this.ms_Ocean.render(this.ms_Ocean.deltaTime); //
    this.ms_Ocean.overrideMaterial = this.ms_Ocean.materialOcean;
    if (this.ms_Ocean.changed) {
      this.ms_Ocean.materialOcean.uniforms.u_size.value = this.ms_Ocean.size;
      this.ms_Ocean.materialOcean.uniforms.u_sunDirection.value.set( this.ms_Ocean.sunDirectionX, this.ms_Ocean.sunDirectionY, this.ms_Ocean.sunDirectionZ );
      this.ms_Ocean.materialOcean.uniforms.u_exposure.value = this.ms_Ocean.exposure;
      this.ms_Ocean.changed = false;
    }
    this.ms_Ocean.materialOcean.uniforms.u_normalMap.value = this.ms_Ocean.normalMapFramebuffer ;
    this.ms_Ocean.materialOcean.uniforms.u_displacementMap.value = this.ms_Ocean.displacementMapFramebuffer ;
    this.ms_Ocean.materialOcean.uniforms.u_projectionMatrix.value = camera.projectionMatrix ;
    this.ms_Ocean.materialOcean.uniforms.u_viewMatrix.value = camera.matrixWorldInverse ;
    this.ms_Ocean.materialOcean.uniforms.u_cameraPosition.value = camera.position;
    this.ms_Ocean.materialOcean.depthTest = true;

  },
  // no se usa
  Resize: function (inWidth, inHeight) {
    camera.aspect = inWidth / inHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(inWidth, inHeight);

  }
};

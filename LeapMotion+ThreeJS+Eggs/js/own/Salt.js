var gui = new dat.GUI()
var clock = new THREE.Clock(true)
var tick = 0;

var Sal = {
  Initialize: function () {
    particleSystem = new THREE.GPUParticleSystem({
          maxParticles: 2500
      });

      particleSystem.position.y = -2

      scene.add( particleSystem);

      // options passed during each spawned
    options = {
      position: new THREE.Vector3(),
      positionRandomness: 3,
      velocity: new THREE.Vector3(),
      velocityRandomness: 0.0,
      color: 0xaa88ff,
      colorRandomness: 0.0,
      turbulence: 0.0,
      lifetime: 0.2,
      size: 0,
      sizeRandomness: 0.1
    };

    spawnerOptions = {
      spawnRate: 15,
      horizontalSpeed: 0.0,
      verticalSpeed: 0.0,
      timeScale: 0.1
    }

    gui.add(options, "size", 0, 4);
  },

  Animate: function () {
    var delta = clock.getDelta() * spawnerOptions.timeScale;
      tick += delta;

      if (tick < 0) tick = 0;

      if (delta > 0) {
        for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
              // Yep, that's really it.  Spawning particles is super cheap, and once you spawn them, the rest of
              // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
              particleSystem.spawnParticle(options);

              cuantaSal = options.size
          }
      }

      particleSystem.update(tick);
  }
};

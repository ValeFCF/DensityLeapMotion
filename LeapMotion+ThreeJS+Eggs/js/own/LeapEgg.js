// Leap Motion

Leap.loop(function(frame){
  //  document.getElementById('output').innerHTML = frame.id
})
.use('transform', {
  vr: true
})
.use('boneHand', {
  targetEl: document.body
})
.use('pinchEvent');

Leap.loopController.loopWhileDisconnected = true;


Leap.loopController.on('pinch', function(hand){
  console.log('pinch: I have a egg');

  if (sphere == null) {
    sphere = new THREE.Mesh(
            new THREE.SphereGeometry( 1.6, 32, 32 ),
            new THREE.MeshBasicMaterial( ) );
    sphere.position.y = 3.4
    sphere.position.x //9
    scene.add( sphere );
    sphere.visible = false;
    //hand.data('sphere', sphere);
    stateOfHuevo = 0;
    console.log(sphere)
    // mesh.scale.set(2,2,2)
  }

}).on('unpinch', function(hand){
  /*var sphere = hand.data('sphere');*/

  if (sphere != null) {
    sphere.visible = true;
    stateOfHuevo = 1;
    console.log('unpinch: I have not a egg');
  }
  //hand.data('sphere', null);

});

Leap.loopController.on('frameEnd', function(f){});

Leap.loopController.on('hand', function(hand){

});

// Leap Motion *****

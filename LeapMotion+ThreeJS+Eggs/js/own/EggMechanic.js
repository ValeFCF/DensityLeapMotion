function moveHuevo(argument) {
  switch(argument) {
      case 1:
          if (sphere.position.y > -3.4) {
            sphere.position.y = sphere.position.y - 0.1
          }
          break;
      case 2:

          if (rebote == 1 && sphere.position.y > -3){
            sphere.position.y = sphere.position.y - 0.1;
            if (sphere.position.y <= -3){
              rebote = 2
            }
          }else if (rebote == 2 && sphere.position.y < 0.3){
            sphere.position.y = sphere.position.y + 0.1
            if (sphere.position.y >= 0.3){
              rebote = 1
              stateOfHuevo = 0
            }
          }
          break;
      case 3:
          //code block
          break;
  }
}

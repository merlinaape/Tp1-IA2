let textura;
let figuras = [];
let indiceFiguras = 0;
let maxFiguras = 40;
let cantFiguras = 0;
let bandera = false;
let radio;
tamano = [];

function setup() {
  createCanvas(windowHeight / 1.5, windowHeight - 50);
}

function draw() {
  background(200);
  noStroke();

  for (let i = 0; i < figuras.length; i++) { //leer array
    figuras[i].show(); //mostrar las figuras
  }

  push();
  blendMode(MULTIPLY); //modo de fusion lienzo y figuras
  tint(255, 100); // color de lienzo
  image(textura, 0, 0); //imagen lienzo
  pop();
}


function mousePressed() {
  if (!bandera) { // si se detecta el mouse 
    bandera = true;
  }

  if (indiceFiguras < maxFiguras) { // si la figura es menor al total de las posibilidades
    let posY = random((-height / 2) + 90, (height / 2) - 90); // se dibujan en la mitad de la pantalla
    let radio = 50; // tamaño inicial del radio
    if ( indiceFiguras < 7){ // cant menor a 20 son grandes
     radio = random (400, 700);
    } else if ( indiceFiguras < 25){ //cant menor a 40 son medianos
    radio = random (200, 350);
    }else{
     radio = random (80, 150); // pequeños
    }
    let rotacion = Math.round(random());; 
    let esEntero = Math.round(random());; 
    let colores = Math.round(random());; 
    figuras[indiceFiguras] = new Figura(posY, radio, rotacion, esEntero, colores);
    indiceFiguras++;
}
}

// array tamaño de figuras
//for (let i = 0; i < tamano.length; i++) { 
  //  tamano[i] =; 
  //}

  // para medir el tiempo de moficacion de la figura
  //let resetearTiempo = 0;
 //let duracion = 1000;
 //let contador=0;

  // if (millis() > resetearTiempo + duracion) {
 // resetearTiempo = millis();
 // contador=0;
//}else{
  //contador++; 
//}

class Figura {
    constructor(y, rad, rot, ent) { // creo contructor
        this.y = y;
        this.rad = rad;
        this.rot = rot;
        this.ent = ent;
    }

    show() {
        push();

        translate(width / 2, height / 2) // division de pantalla 
       //blendMode(HARD_LIGHT); //modo de fusion lienzo y figuras

        if(this.rot == 0 ){ //rotaciones 
           rotate(radians(90));
       }else{
           rotate(radians(270));
        }
        
       
        if(this.ent == 0){  // semicirculos
            
            fill(200, 100, 0); //naranja
           // arc(this.y, 0, mouseX ,mouseX, 0, PI);
            arc(this.y, 0, this.rad ,this.rad, 0, PI);
            fill(100, 200, 0);// verde
            arc(this.y, 0, this.rad / 1.2, this.rad / 1.2, 0, PI);
            fill(100, 0, 200); // violeta
            arc(this.y, 0, this.rad / 1.7, this.rad / 1.7, 0, PI);
        }else{ //circulos
            fill(200,0,50); //fucsia
            arc(this.y, 0, this.rad, this.rad, 0, TWO_PI);   
            fill(300, 130, 0); //rojo
            // arc(this.y, 0, mouseX ,mouseX, 0, TWO_PI);
             arc(this.y, 0, this.rad/1.1 ,this.rad/1.1, 0, TWO_PI);
             fill(140, 200, 50);// amarillo
             arc(this.y, 0, this.rad / 1.2, this.rad / 1.2, 0, TWO_PI);
             fill(10, 0, 200); //azul oscuro
             arc(this.y, 0, this.rad / 1.5, this.rad / 1.5, 0, TWO_PI); 
             fill(10, 30, 200); // azul
             arc(this.y, 0, this.rad / 1.6, this.rad / 1.6, 0, TWO_PI);       
        }
        
        pop();
      //  console.log(this.rot);
    }
}
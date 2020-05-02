let pantallas;
let numero;
let suma;
let resta;
let continuar;
let multiplicar;
let circulo;
let mover;
let error;
let cuadrado;
let recto;
let cuadro = [];
let circua = [];
let pinteMas;

function setup(){
createCanvas(500,500);
figtu = new Figura(20,20,20,20);
resta = loadImage("../signos/resta.png");
suma = loadImage("../signos/suma.png");
continuar = loadImage("../signos/continuar.png");
multiplicar = loadImage("../signos/multiplicar.png");
circulo = loadImage("../signos/circulo.png");
pantallas = 0;
numero = 0;
mover = 210;
error = new Excepcion();
pinteMas == false;
}

function draw(){
background(0);

switch(pantallas){
    case 0:
        pantalla1();
    break;

    case 1:
        pantalla2();
        for(let i = 0; i < numero; i++){
            cuadro[i].pintar();
            cuadro[i].mover();
        }
        for(let v = 0; v < circua.length; v++){
            circua[v].pintarCir();
            circua[v].mover();
        }

    break;
}
textSize(10);
text("X"+mouseX+" Y"+mouseY,mouseX,mouseY);
}

function mousePressed(){
    //suma pantalla1
    if(mouseX > 96 && mouseX < 175 && mouseY > 248 && mouseY < 324 && pantallas == 0){
        numero+=1;
        cuadro.push(new Cuadrado(random(116,480), random(0,230), 20, 4)); 
    }
    //resta pantalla1
    if(mouseX > 298 && mouseX < 374 && mouseY > 248 && mouseY < 324 && pantallas == 0){
        numero-=1;
        cuadro.pop();
    }
    //continuar pantalla1
    if(mouseX > 319 && mouseX < 472 && mouseY > 418 && mouseY < 470 && pantallas == 0){
        if(numero > 1 || numero < 10){
            pantallas+=1;    
        }

        if(numero < 1 || numero > 10){
            error.error();
            pantallas = 0;
           console.log(pantallas); 
        }

    }

    //suma pantalla2
    if(mouseX > 18 && mouseX < 94 && mouseY > 30 && mouseY < 105){
        
        
        if(numero > 0 || numero <= 10){
           
            cuadro.push(new Cuadrado(random(116,480), random(0,230), 20, 4));
            numero+=1;
            
        }

        if(pinteMas == true){
           
        }
        
    }
    //resta pantalla2
    if(mouseX > 18 && mouseX < 94 && mouseY > 154 && mouseY < 230){
        numero-=1;
        if(numero > 0){
            cuadro.pop();
        }
        
    }
    //multiplicar pantalla2
    if(mouseX > 18 && mouseX < 94 && mouseY > 280 && mouseY < 355){
        cuadro.forEach(duply);
        circua.forEach(duply);
    }
    //convertir en circulos pantalla2
    if(mouseX > 18 && mouseX < 94 && mouseY > 403 && mouseY < 480){
        cuadro.map(circulitos);
    }
}

function pantalla1(){
    image(suma,100,250,75,75);
    image(resta,300,250,75,75);
    image(continuar, 320, 420, 150, 50);
    fill(255);
    textSize(100);
    text(numero,mover,320);
    if(numero == 10){
    mover = 180;
}
    if(numero < 10){
    mover = 210;
}
    if(numero < 0){
    mover = 180;
}
}

function pantalla2(){
    background(0);
        image(suma,20,30,75,75);
        image(resta, 20, 155, 75, 75);
        image(multiplicar, 20, 280, 75, 75);
        image(circulo, 20, 405, 75, 75);
        stroke(255);
        line(115, 0, 115, 500);
}

function duply(element,index,array){

    array[index].setTam(array[index].getTam()*2);

}

function circulitos(element, index, array){

    circua.push(new Circulo(random(136,480), random(270, 480), 20, 4));
}





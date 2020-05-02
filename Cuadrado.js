class Cuadrado extends Figura {
    constructor( posX, posY, tam, vel) {
        super( posX, posY, tam);
        this.posX = posX;
        this.posY = posY;
        this.tam = tam;
        this.vel = vel;

    }
    pintar(){
        fill(255);
        rect(this.posX,this.posY,this.tam,this.tam);
    }


    mover(){
        
        this.posX += this.vel;
        if(this. posX > 480 || this.posX < 116){
            this.vel *= -1;
        }
        
        // console.log(this.posX);

    }

    setTam(tam){
        this.tam = tam;
    }
    
    getTam(){
        return this.tam;
    }
    
    
}

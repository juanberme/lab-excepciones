class Excepcion{
    constructor(){

    }
    error() {
        try {
            if(numero < 1 || numero > 10){
                throw " solo numeros entre 1 y 10";
            }
            } catch (error) {
                console.log("solo numeros entre 1 y 10");
                alert("Error"+ error);
            }  
    }
    
}
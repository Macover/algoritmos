// Problema 4

const esUnTriangulo = (a, b, c) => {

    const suma1 = a + b;
    const suma2 = a + c;
    const suma3 = b + c;

    if(a < 0 || b < 0 || c < 0){
        console.log("Error")
    }else{
        if(suma1 > c || suma2 > b || suma3 > a){
            console.log("Se puede construir")
        }else{
            console.log("No se puede construir")
        }
    }
}
esUnTriangulo(45,70,1)

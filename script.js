// Problema 5

const array = [1, 5, 9, 2, 15, 9, 10, 12];

const obtenerDosMayores = (array) => {

    const newArray = [];

    let aux = getMayor(array);
    
    for (let i = 0; i < array.length; i++) {
        if(array[i] === aux){
            delete array[i];
        }
    }
    newArray[0] = aux;
    newArray[1] = getMayor(array);

    return newArray
}
const getMayor = (array) =>{
    let aux = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > aux){
            aux = array[i] 
        }
    }
    return aux;
}
console.log(obtenerDosMayores(array))

// Problema 3

const array1 = [1, 3, 3, 4, 5, 6, 8, 9, 9];
const array2 = [2, 2, 3, 5, 7, 9, 9];

const quitarNumerosRepetidos = (array1, array2) => {
    const newArray = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
                newArray.push(array1[i]);
                delete array1[i];
                delete array2[j];
            }
        }
    }
    return newArray;
}
console.log(quitarNumerosRepetidos(array1,array2))

// Problema 2

const array1 = [1, 2, 6, 8, 9];
const array2 = [3, 5, 6, 9];

const fucionaArreglosOrdenados = (array1, array2) => {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray.push(array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])
    }
    return ordenaArreglo(newArray)
}
const ordenaArreglo = array => {
    const l = array.length;
    for (let i = 0; i < l; i++) {
        for (let j = 0; j < l - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
};

const letters = ['a','b','c'];

//hacer una transformación inmutable es realizar una copia con el resultado de las transformaciones que hayas realizado sobre un array original. Es inmutable porque el array original quedó igual que como estaba al principio, y tu obtienes uno nuevo con el resultado de tus transformaciones.

const newArray = [];
//iteracion clásica a través del array
for (let i=0; i < letters.length; i++){
    const element = letters[i];
    newArray.push(element + '++');
}

console.log('original',letters);
console.log('newArray', newArray);

//a traves del método map

const newArray2 = letters.map(item=> item + '++');
console.log(newArray2);
const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

//voy a unir los dos arrays utilizando el metodo tradicional for. Utilizamos el spread operator al crear la variable newArray para forzar a que sea una copia totalmente nueva y no referenciada a memoria (porque si no, al utilizar el método concat y pedir ambas respuestas a la vez, elements será modificado en base a la referencia que ya tiene en memoria, añadiendo los elementos que cambian al array elements que ya existía. Y eso devuelve un resultado "extraño")
const newArray = [...elements];
for (let i=0; i < otherElements.length; i++){
    const item = otherElements[i];
    newArray.push(item);
}

console.log('for',newArray);

//lo mismo pero con el metodo concat
const rta2 = elements.concat(otherElements);
console.log('concat',rta2);
//lo mismo pero expresado de otra manera
const rta3 = [...elements, ...otherElements];
console.log('spreadOperator',rta3);
//lo mismo pero modificando el array original
elements.push(...otherElements);
console.log('elements', elements);

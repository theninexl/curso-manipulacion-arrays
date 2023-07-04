const matriz = [
    [1,2,3],
    [4,5,6, [1,2,[1,2]]],
    [7,8,9]
];

//vamos a "aplanar" nuestra matriz en un array simple utilizando el for
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }    
}
console.log('for',newArray);

//lo mismo pero con flat (el parametro es para especificar el número de 'niveles' que quieres aplanar)
const rta = matriz.flat(3);
console.log('flat',rta);
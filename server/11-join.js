const elements = ['Fire', 'Air', 'Water'];

//unir todos los elementos del array con el separador especificado
let rtaFinal = '';
const separator = '--';
for (let i=0; i < elements.length; i++){
    const item = elements[i];
    rtaFinal = rtaFinal + item + separator;
}
console.log('for', rtaFinal);

//lo mismo pero con el metodo join

const rta2 = elements.join('--');
console.log('join', rta2);


const title = 'Curso de manipulacion de arrays';
const titleFinal = title.split(' ').join('-').toLowerCase();
console.log(titleFinal);
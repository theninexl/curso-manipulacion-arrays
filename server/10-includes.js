//includes devuelve si existe el elemento que buscas dentro de un array

const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
//vamos a evaluar si hay algun elemento que sea dog
for (let i=0; i < pets.length; i++){
    const item = pets[i];
    if (item === 'dog'){
        includeInArray = true;
        break
    }
}

console.log('for', includeInArray);

const rta = pets.includes('dog');
console.log('includes', rta);
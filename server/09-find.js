const numbers = [1,30,39,29,10,13];

let rta = undefined;
//vamos a evaluar si hay algun numero que se 30
for (let i=0; i < numbers.length; i++){
    const item = numbers[i];
    if (item === 30 ) {
        rta = item;
        break;
    }
}

console.log('rta',rta);

//find no devuelve un array que cumple con la condicion que se le imponga, sino el primer elemento en particular que haga match con la condición que se le imponga
const rta2 = numbers.find(item => item === 30);
console.log('find',rta2);






const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

const rta3 = products.find(item => item.id === '🍔');
console.log('find',rta3);

const rta4 = products.findIndex(item => item.id === '🍔');
console.log('findIn',rta4);
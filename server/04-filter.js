const words = ['spray','limit','elite','exuberan'];

const newArray = [];
//filtrar a traves de iteracion clásica 
for (let i=0; i < words.length; i++){
    const item = words[i];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('original',words);
console.log('newArray',newArray);

//filtrar el array original con el método filter
const rta = words.filter(item => item.length >=6);

console.log('original',words);
console.log('rta',rta);

//condicional trabajando con objetos
const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered:true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered:false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered:true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered:true,
    },
];

//filtro un poco más complejo que devuelve los objetos que se han entregado y que además tenian un coste mayor a 100
const rta2 = orders.filter(item => item.delivered && item.total >= 100);
console.log('rta2',rta2);

//filtro de busqueda simple
const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('an'));
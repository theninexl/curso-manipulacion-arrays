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
console.log('original',orders);
//transformacion con map para quedarnos solo con la propiedad "total", de los objetos
const response = orders.map(item => item.total);
console.log('response',response);

//usar el metodo map crea un nuevo array pero cuando el array original está lleno de objetos lo que hace JS no es crear un objeto completamente nuevo, sino una copia referenciada de la memoria en la que simplemente añade al final esa nueva propiedad 'tax'. Es un error común en el que estamos mutando el array original y debe evitarse
const response2 = orders.map(item => {
    item.tax = .19;
    return item;
})
console.log('original',orders);
console.log('response2',response2);

//utilizando el spread operator (operador de propagación, nueva implementación ECMASCRIPT, está en el curso de ECMASCRIPT) evita que se modifique el array original al forzar la creación de una nueva copia a la que se le añade la propiedad 'tax' al final de cada objeto.
const response3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});

console.log('original',orders);
console.log('response3',response3);
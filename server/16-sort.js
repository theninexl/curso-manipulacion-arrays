const months = ["March", "Jan", "Feb", "Dec"];

//si haces un sort sin especificar, en el caso de srings los ordenará según la tabla ASCII (que no tiene por qué coincidir con el orden 100% alfabético necesariamente)
months.sort();
console.log(months);

//para especificar un orden ascendente para los numeros hay que especificar dos argumentos para que pueda compararlos entre si y hacer el orden. El descendiente sería b - a.
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b)=> a - b);
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
//si no especificas ordenará por ASCII, y esta especificación es para que ordene según el lenguaje local
words.sort((a,b)=> a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
//en el caso de los objetos la comparación se toma escogiendo la propieda por la cual quieren obtener el orden, en este caso "total"
orders.sort((a,b)=> b.total - a.total);
console.log(orders);
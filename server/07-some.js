const numbers = [1,2,3,4];

let rta = false;
//vamos a ver si hay algún number par a traves de iteracion clásica 
for (let i=0; i < numbers.length; i++){
    const item = numbers[i];
    if (item % 2 === 0) {
        rta = true;
        break;
    }
}
console.log('rta',rta);

//ver si hay algún numero par usando el metodo some

const rta2 = numbers.some(item => item % 2 === 0);
console.log('rta2',rta2);

//vamos a ver si hay alguna orden de compra entregada con some

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

const rta3 = orders.some(item => item.delivered);
console.log('rta3',rta3);

//vamos a ver si hay algún hueco en el que yo pueda agendar en este objeto con citas de calendario, sin que se cruce con una cita existente, utilizando el metodo Some

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title:'Cita de trabajo',
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title:'Cita con mi jefe',
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title:'Cena',
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
    title:'Compras',
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
}

console.log('isOverlap', isOverlap(newAppointment));
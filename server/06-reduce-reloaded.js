const items = [1, 3, 2, 3];

//vamos a usar reduce para que nos devuelva un array que nos indica cuantos elementos hay del elemento 3 en el array items, cuantos elementos hay del elemento "2" en el array items, y cuantos elementos hay del elemento "1" en el array items: la frecuencia de cada objeto.

const rta = items.reduce((obj,item) => {
    //si el elemento no se encuentra dentro del objeto que se inicializa
    if(!obj[item]) {
        //a ese objeto le ponemos un 1
        obj[item] = 1;
    //si el elemento ya se encuentra dentro del objeto que se inicializa
    } else {
        //a ese objeto le sumamos 1
        obj[item] = obj[item]+1;
    }

    return obj;
},{});

console.log(rta);


//utilizar filtrar junto con map para ver cuantos jugadores tienen qué nivel dentro de nuestro array data
const data = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "high"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "high"
    },
];

// primero uso map para reducir ese array solo a los objetos con la propiedad level, y luego utilizo el mismo método reduces de antes para contar las diferentes cantidades de cada elemento que se encuentran dentro del array
const rta2 = data
.map(item => item.level)
.reduce((obj,item) => {
    //si el elemento no se encuentra dentro del objeto que se inicializa
    if(!obj[item]) {
        //a ese objeto le ponemos un 1
        obj[item] = 1;
    //si el elemento ya se encuentra dentro del objeto que se inicializa
    } else {
        //a ese objeto le sumamos 1
        obj[item] = obj[item]+1;
    }

    return obj;
},{});

console.log(rta2)


const list = [1,3,4,6,4,6,3,8,9,4,5,6,8,2,0,4,5,6];

const rta3 = list.reduce((obj,value) => {
    if (value <= 5) obj["1-5"] += 1
    else if (value > 5 && value <=8) obj["6-8"] += 1
    else if (value > 8 && value <= 10) obj["9-10"] += 1

    return obj;
},{
    "1-5": 0,
    "6-8":0,
    "9-10":0
});

console.log(rta3);
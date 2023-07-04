const numbers = [1,30,39,29,10,13];

let rta = true;
//vamos a evaluar si todos los números son menores a 40
for (let i=0; i < numbers.length; i++){
    const item = numbers[i];
    if (item >= 40 ) {
        rta = false;
        break;
    }
}

//misma evaluación pero con el metodo every
const rta2 = numbers.every(item => item <= 40)


console.log ('rta',rta);
console.log ('rta2',rta2);


//vamos a evaluar que todos los miembros de este equipo sean menores de 15
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const rta3 = team
  .map(item => item.age)
  .every(item => item <= 15)

  console.log ('rta3',rta3);
const totals = [1,2,3,4];

let sum = 0;
//sumar todos los elementos a traves de iteracion clásica 
for (let i=0; i < totals.length; i++){
    const item = totals[i];
    sum = sum + item;
}
console.log('sum',sum);


//sumar todos los elementos a través del método reduce

const rta = totals.reduce((sum, item)=> sum+item, 0);
console.log('rta',rta);
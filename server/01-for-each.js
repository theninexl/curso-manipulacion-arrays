const letters = ['a','b','c'];

//iteracion clásica a través del array
for (let i=0; i < letters.length; i++){
    const element = letters[i];
    console.log('for',element);
}

//iteracion con forEach
letters.forEach(item => console.log('foreach',item))
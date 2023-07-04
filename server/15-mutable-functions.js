const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === '🍕');
const productIndex = products.findIndex(item => item.id === '🍕');
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex,1);
}


console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const updates = {
    id: '🥞',
    changes: {
        price:200,
        description: 'delicious'
    }
}

const productIndex2 = products2.findIndex(item => item.id === updates.id);
products2[productIndex2] = {
    ...products2[productIndex2],
    ...updates.changes
};
console.log(products2);
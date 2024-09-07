const products = [
    {name: 'Shampoo', price: 1200},
    {name: 'pant', price: 700},
    {name: 'Bent', price: 50},
];

function getTotalshopping(products){
    let count = 0;
    for(const product of products){
        count = product.price + count;
    }
    return count;
}

const total = getTotalshopping(products);
console.log('Total Expense', total);
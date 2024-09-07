// how much you expense from shopping cart.

const products = [
    {name: 'Shampoo', price: 1200, quantity: 2},
    {name: 'pant', price: 700, quantity: 3},
    {name: 'Bent', price: 50, quantity: 5},
    {name: 'shirt', price: 200, quantity: 1},
];

function cartTotal(products){
    let sum = 0;
    for(const product of products){
       const totalExpense = product.price * product.quantity;
       sum = sum + totalExpense;
    }
    return sum;
}    

const shoppingCart = cartTotal(products);
console.log(shoppingCart);
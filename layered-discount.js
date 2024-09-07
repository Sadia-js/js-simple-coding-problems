// Multi-Layered discount

/**
 * first100 --> 100 
 * 101to200 --> 90 
 * above200 --> 70 
 */ 

function productsDiscount(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(quantity <= 100){
        const totalExpense = first100 * quantity;
        return totalExpense;
    }else if(quantity <= 200){
        const first100total = 100 * first100Price;
        const after100Quantity = quantity - 100;
        const totalAfter100 = after100Quantity * second100Price;
        const totalExpense = first100total + totalAfter100;
        return totalExpense
    }else{
        const first100total = 100 * first100Price; 
        const second100Total = 100 * second100Price;
        const restQuantity = quantity - 200;
        const more200Price = restQuantity * above200Price;
        const totalExpense = first100total + second100Total + more200Price;
        return totalExpense;
    }
}

const totalProducts = productsDiscount(203);
console.log(totalProducts);
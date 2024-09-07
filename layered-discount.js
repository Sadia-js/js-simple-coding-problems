// Multi-Layered discount

/**
 * first100 --> 100 
 * 101to200 --> 90 
 * above200 --> 70 
 */ 

function productsDiscount(quantity){
    const first100 = 100;
    const second100 = 90;
    const above100 = 70;
    if(quantity <= 100){
        const discount1 = first100;
        return discount1;
    }else if(quantity <= 200){
        const discount2 = (quantity * second100) + first100; 
        return discount2;
    }
}

const totalProducts = productsDiscount(90);
console.log(totalProducts);
/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
    
    Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */ 

    function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    if(typeof laptopQuantity !== 'number' || typeof tabletQuantity !== 'number' || typeof mobileQuantity !== 'number'){
        return 'Please provide number here';
    }
       const laptopPrice = 35000;
       const tabletPrice = 15000;
       const mobilePrice = 20000; 

       const purchasedLaptop = laptopQuantity * laptopPrice;
       const purchasedTablet = tabletQuantity * tabletPrice;
       const purchasedMobile = mobileQuantity * mobilePrice;
       const totalMoneyRequired = purchasedLaptop + purchasedTablet + purchasedMobile;
       return totalMoneyRequired;
    }
    const totalBudget = calculateElectronicsBudget(2, 1, 3);
    console.log('Total budget required', totalBudget, 'tk');

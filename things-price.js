// how much money do you need

function thingsPrices(shirtQuan, pantQuan, shoeQuan){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirts = shirtQuan * shirtPrice;
    const pants = pantQuan * pantPrice;
    const shoes = shoeQuan * shoePrice;

    const moneyNeed = shirts + pants + shoes;
    return moneyNeed;
}
const totalMoney = thingsPrices(0, 1, 1);
console.log(totalMoney);
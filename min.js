const prices = [2000, 1000, 30000, 70000, 12000];

function getMinPrice(numbers){
    let minimum = prices[0];
    for(const number of numbers){
        if(number < minimum){
            minimum = number;
        }
    }
    return minimum;
}
const minPrice = getMinPrice(prices);
console.log(minPrice);
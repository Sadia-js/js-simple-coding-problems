// find out the cheapest price

const mobiles = [
    {name: 'Samsung', price: 20000, camera: '20 mp', color: 'Green'},
    {name: 'nokia', price: 12000, camera: '10 mp', color: 'Blue'},
    {name: 'Opo', price: 10000, camera: '15 mp', color: 'Black'},
    {name: 'Galaxy', price: 7000, camera: '12 mp', color: 'Silver'},
    {name: 'Iphone', price: 150000, camera: '23 mp', color: 'Titanic'},
]

function getCheaptestPhone(phones){
    let cheap = phones[0];
    for(const phone of phones){
        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
    return cheap;
}

const cheapestPhone = getCheaptestPhone(mobiles);
console.log('Cheapest Phone is', cheapestPhone);
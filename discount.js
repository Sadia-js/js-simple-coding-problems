/** 
 * upto --> 100;
 * more than 100 - 200 --> 90;
 * more than 100 --> 70;
 * 
*/

const ticket = 50;

function getDiscountPrice(quantity){
    const ticketPrice100 = 100;
    const ticketPrice200 = 90;
    const ticketPrice201 = 70;
    if( quantity > 200){
        const total = quantity * ticketPrice201;
        return total;
    }else if(quantity > 100){
        const total = quantity * ticketPrice200;
        return total;
    }else{
        const total = quantity * ticketPrice100;
        return total;
    }
}

const totalTicketSell = getDiscountPrice(ticket);
console.log(totalTicketSell);

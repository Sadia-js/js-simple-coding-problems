function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}
// const result = multiply(5, 'seven');
// const result = multiply([7, 6], 'seven');
// const result = multiply(3 + 6); 
// const result = multiply(3 * 6, 8 + 1);


const result = multiply('3', 'seven');
// console.log(result);

//
function fullName(first, last){
    if(typeof first !== 'string'){
        return 'First name should be a string';
    }
    else if(typeof last !== 'string'){
        return 'Last name should be a string';
    }
    const full = first + ' ' + last;
    return full;
}

const full = fullName('Sadia', 10);
// console.log(full);

// Object
function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'Kodom', price: 35, color: 'blue'});
// console.log(price);

function getSecond(numbers){
    if(Array.isArray(numbers) !== true){
        return 'Please provide a valid array';
    }
    const second = numbers[1];
    return second;
}
const second = getSecond([3, 7, 9]);
console.log(second);
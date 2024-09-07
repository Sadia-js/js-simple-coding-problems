function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//
function calculator(a, b, operation){
    if(operation === 'add'){
        const value = add(a, b);
        return value;
    }
    else if(operation === 'subtract'){
        const value = subtract(a, b);
        return value;
    }
    else if(operation === 'multiply'){
        const value = multiply(a, b);
        return value;
    }
    else if(operation === 'divide'){
        const value = divide(a, b);
        return value;
    }
    else{
        return "Ony 'add' 'subtract' 'multiply' 'divide' operations are allowed";
    }
}

const result = calculator(6, 7, 'divide');
console.log(result);
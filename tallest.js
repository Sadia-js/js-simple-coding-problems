const heights = [65, 60, 78, 75, 55, 70];

function getTallest(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}

const tallest = getTallest(heights);
console.log('Tallest person height', tallest);
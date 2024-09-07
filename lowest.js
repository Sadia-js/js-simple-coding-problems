const marks = [90, 78, 99, 34, 96];
function getLowest(marks){
    let minimum = marks[0];
    for(const mark of marks){
        if(mark < minimum){
            minimum = mark;
        }
    }
    return minimum;
}

const lowestMarks = getLowest(marks);
console.log('Lowest marks:', lowestMarks);
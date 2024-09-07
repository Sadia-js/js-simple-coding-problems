const disha = 98;
const anika = 85;

if(disha > anika){
    console.log('Disha will get the strawberry');
}
else{
    console.log('Salman will get the strawberry');
}

// inside a function

function moreMarks(s1, s2){
    if(s1 > s2){
        return s1;
    }
    return s2;
}

const marks1 = moreMarks(95, 98);
const marks2 = moreMarks(65, 77);
const getMax = moreMarks(marks1, marks2);
console.log('Max marks', getMax);
// can do it in object
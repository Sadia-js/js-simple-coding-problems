// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


const heights2 = [167, 190, 120, 165, 137];

function getLowestHeights(heights){
    let minimum = heights[0];
    for(const height of heights){
        if(height < minimum){
            minimum = height;
        }
    }
    return minimum;
}

const lowestHeight = getLowestHeights(heights2);
console.log(lowestHeight);
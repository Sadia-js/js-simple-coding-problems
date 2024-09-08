/**
 * Find the friend with the smallest name.
 * const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */ 

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function getSmallestName(strings){
    if(Array.isArray(strings) !== true){
        return 'Please provide an array with string';
    }
    let smallest = strings[0];
    for(const str of strings){
        if(str.length < smallest.length){
            smallest = str;
        }
    }
    return smallest;
}

const smallestName = getSmallestName(heights2);
console.log(smallestName);
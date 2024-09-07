function getMaxNumbs(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b > c){
        return b;
    }
    return  c;
}

const maxNumbs = getMaxNumbs(108, 90, 800);
console.log('Max Number of between three is', maxNumbs);

// without function
const jim = 39;
const jack = 25;
const kane = 20;
if(jim > jack && jim > kane){
    console.log('Jim is the Boss of Company');
}

else if(jack > jim && jack > kane){
    console.log('Jack is the Boss of Company');
}
else{
    console.log('Kane is the Boss of Company');

}
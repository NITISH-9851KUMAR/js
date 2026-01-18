function add10(ele){
    return ele+10;
}

let arr= [3,2,5,6,2];
console.log(`Original Array ${arr}`);


// Map Function
// Method 1 for map
let brr= arr.map(add10);
console.log(brr);

// Method 2 for Map
brr= arr.map(function(ele){
    return ele*2;
})
console.log(brr);

// Method 3 for Map
brr= arr.map((ele)=>{
    return ele*ele*ele;
})
console.log(brr);

// Method 4 for Map
brr= arr.map(ele => ele * -2);
console.log(brr);
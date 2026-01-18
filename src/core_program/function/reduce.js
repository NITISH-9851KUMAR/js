let arr= [3,2,5,6,2];
console.log(`Original Array: ${arr}`);

let brr= arr.reduce((a,b)=>{
    return a+b;
})
console.log(brr);
let arr= [3,5,6,2];
console.log(`Original Array ${arr}`);

// default ascending order
let brr= arr.sort();
console.log(brr);

// sort() method sometimes give wrong answer for negative number
arr= [1, -2, -3, 9];
arr= arr.sort();
console.log(arr);

arr= [1, -2, -3, 9];
// actual ascending order sort
arr= arr.sort((a,b)=>a-b); // proper sorting
console.log(arr);



// for descending order
let br= arr.sort((a,b)=>b-a);
console.log(br);
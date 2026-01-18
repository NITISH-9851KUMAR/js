function evenFilter(ele){
    return ele%2!==0;
}

let arr= [9, 7, 2, 3, 8, 9, 10];
console.log(`Actual Array: ${arr}`);

// method 1
// Filter out even elements
let brr= arr.filter(evenFilter);
console.log(brr);

// method 2
// less than 5
brr = arr.filter(function less5(ele) {
    return ele<5;
})
console.log(brr);

// method 3
// greater then 5
brr = arr.filter(function (ele) {
    // return (ele >5) ?  true : false;
    return (ele>5); //short form of above line
})
console.log(brr);

// method 4
// greater than 20, short form
brr = arr.filter(ele => (ele >20))
console.log(brr);
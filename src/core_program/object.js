// Object is kind of Map/Dictionary where we have "Key-value" Pairs

// Declare Object
let obj = {
    name: "Me Kumar",
    age: 23,
    percentage: 92,
    'is Married': false
};

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.percentage);
// console.log(obj["is Married"]);

// console.log(obj.age);
// // Update Object Value
// obj.age= 24;
// console.log(obj.age);
// obj['age']= 32;
// console.log(obj.age);

// For in Loop
for (const key in obj) {
    console.log(key, obj[key]);
}

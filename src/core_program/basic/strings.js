// let str= "Joy with Java";
// console.log(str);
//
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// for(let i= 0; i<str.length; i++){
//     console.log(i);
// }
//
// for(const ele of str){
//     console.log(ele);
// }

let str= "ab cd nn tf dd";
console.log(str);
let arr= str.split(' '); // break string as a space
for(const ele of arr){
    console.log(ele);
}

let st= "ab,bc,cd,tt,33";
console.log(st);
let brr= st.split(','); // break string as a comma(,)
for(const ele of brr){
    console.log(ele);
}
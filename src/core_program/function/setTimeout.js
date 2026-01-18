// function fun1(){
//     console.log("Hello me called by setTimeout function")
// }

// setTimeout(fun1, 5000);
//
// for(let i= 1; i<=10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000)
// }

for(let i= 1; i<=10; i++){
    setTimeout(function(){
        console.log(11-i);
    }, i*1000);
}
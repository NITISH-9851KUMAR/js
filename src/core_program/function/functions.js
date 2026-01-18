// Declare function
function eqn(){
    return "Myself basic Function me only print some text!";
}
// call the function
console.log(eqn());

// calculate the factorial of number
function factorial(val){
    let fact= 1;
    for(let i= 1; i<=val; i++){
        fact= fact * i;
    }
    return fact;
}
console.log(factorial(5));
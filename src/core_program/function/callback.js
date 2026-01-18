function product(a, b, c){
    return a * b *c;
}
function fun(num1, num2){
    console.log(num1(4,2,3)-num2);
}
function fun2(){
    fun(product, 20);
}

// cal the function
fun2();
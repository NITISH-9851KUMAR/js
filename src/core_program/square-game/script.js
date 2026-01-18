// for box1
let box1= document.getElementById("box1");
box1.addEventListener("mouseenter", function(){
    let val= Math.trunc(Math.random()*100);
    box1.innerHTML= `<h1>${val}</h1>`;
})
box1.addEventListener("mouseleave", function(){
    box1.innerHTML= "<h1>1</h1>";
    box1.style.backgroundColor= "white";
})
box1.addEventListener("dblclick", function(){
    let x= Math.trunc(Math.random()*250);
    let y= Math.trunc(Math.random()*250);
    let z= Math.trunc(Math.random()*250);
    box1.style.backgroundColor= `rgb(${x}, ${y}, ${z})`;
})


// for box2
let box2= document.getElementById("box2");
let flag= true;
box2.addEventListener("mouseenter", function(){
    if(flag){
        box2.style.backgroundColor= "red";
        flag= false;
    }else{
        box2.style.backgroundColor= "green";
        flag= true;
    }
})
box2.addEventListener("mouseleave", function(){
    box2.style.backgroundColor= "white";
})


let box3= document.getElementById("box3");
box3.addEventListener("mouseenter", function(){
    let x= Math.trunc(Math.random()*250);
    let y= Math.trunc(Math.random()*250);
    let z= Math.trunc(Math.random()*250);
    box3.style.backgroundColor= `rgb(${x}, ${y}, ${z})`;
})
box3.addEventListener("mouseleave", function(){
    box3.style.backgroundColor= "white";
})


let box4= document.getElementById("box4");
box4.addEventListener("click", function(){
    let x= Math.trunc(Math.random()*256);
    let y= Math.trunc(Math.random()*256);
    let z= Math.trunc(Math.random()*256);
    box1.style.backgroundColor= `rgb(${x}, 255, 255)`;
    box2.style.backgroundColor= `rgb(255, ${y}, 255)`;
    box3.style.backgroundColor= `rgb(255, 255, ${z})`;
})
box4.addEventListener("mouseleave", function(){
    box1.style.backgroundColor= "white";
    box2.style.backgroundColor= "white";
    box3.style.backgroundColor= "white";
})




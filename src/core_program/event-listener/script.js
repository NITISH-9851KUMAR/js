let rez= document.getElementById("Rez");
let leilani= document.getElementById("Leilani");
let benny= document.getElementById("Benny");

function rezWork(){
    rez.style.color= "white";
    rez.style.backgroundColor= "black";
}
function leilaniWork(){
    leilani.style.color= "green";
    leilani.style.backgroundColor= "red";
}

rez.addEventListener("mouseenter", function(){
    rezWork();
});
rez.addEventListener("mouseleave", function(){
    rez.style.color= "black";
    rez.style.backgroundColor= "white";
});

leilani.addEventListener("click", function(){
    leilaniWork();
});

benny.addEventListener("click", function(){
    rezWork();
    leilaniWork();
})


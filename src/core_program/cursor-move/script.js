let main= document.getElementById("main");
let cursor= document.getElementById("cursor");

main.addEventListener("mousemove", function(details){
    cursor.style.left= details.x+"px";
    cursor.style.right= details.y+"px";

});
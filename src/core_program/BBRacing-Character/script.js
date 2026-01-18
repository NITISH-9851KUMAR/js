let val = document.getElementById("main");
let card = "";

for (let i = 1; i <= 90; i++) {
    card += `<div class="card"> <img src=${gameImage()}></div>`;
}
val.innerHTML = card;

function gameImage() {
    let arr= [
        "img/ghost.jpg",
        "img/benny.jpg",
        "img/Ketty.jpg",
        "img/lilli.jpg",
        "img/rez.jpg",
        "img/Mario_Kart.jpg"
    ]
    let val = Math.trunc(Math.random() * arr.length);
    return arr[val];
}
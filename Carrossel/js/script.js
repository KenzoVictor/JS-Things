const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let anyId = 0;

function carrossel(){
    anyId++;

    if(anyId > img.length - 1){
        anyId = 0;
    }
    imgs.style.transform = `translateX(${-anyId * 500}px)`
}

setInterval(carrossel, 1800);
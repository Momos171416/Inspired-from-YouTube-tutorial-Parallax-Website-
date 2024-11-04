let moon = document.getElementById("moon");
let text = document.getElementById("text");
let train = document.getElementById("train");

let desert_moon = document.getElementById("desert-moon");
let man = document.getElementById("man");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    moon.style.top = value * 0.9 + "px";
    text.style.top = 80 + value * -0.2 + '%';
    train.style.left = value * 1.5 + "px";

    desert_moon.style.top = value * 0.3 + "px"; 
    man.style.left = value * 0.6 + "px";
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    console.log(pos);

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let calcscrollValue = Math.round((pos * 100) / calcHeight);

    console.log(calcscrollValue); // Fixed from "object"
};

window.addEventListener("scroll", calcScrollValue);

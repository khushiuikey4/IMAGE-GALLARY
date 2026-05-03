let container = document.querySelector(".innerContainer");

let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let d = 735;
container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaX;
})
let leftSwap = () => {
    container.scrollLeft -= d;
    container.style.scrollBehaviour = "smooth";
}
let rightSwap = () => {
    container.scrollLeft += d;
    container.style.scrollBehaviour = "smooth";
}
leftButton.addEventListener("click", leftSwap);
rightButton.addEventListener("click", rightSwap);

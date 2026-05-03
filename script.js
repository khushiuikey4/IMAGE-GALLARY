let container = document.querySelector(".innerContainer");
container.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (isScrolling) return;
    isScrolling = true;
    let scrollAmount = 735;
    if (e.deltaY > 0 || e.deltaX > 0) {
        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    } else {
        container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    }
    setTimeout(() => {
        isScrolling = false;
    }, 400); // match animation duration

});

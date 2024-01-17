const arrowBtns = document.querySelectorAll(".thuvien .arrow");
const carousel = document.querySelector(".thuvien .carousel");
const cards = document.querySelectorAll(".thuvien .card");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - 250 : 250;
    })
})

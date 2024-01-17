const arrowBtns = document.querySelectorAll(".tintuc-sukien .first-part .arrow");
const carousel = document.querySelector(".tintuc-sukien .first-part .carousel");
const cards = document.querySelectorAll(".tintuc-sukien .first-part .card");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - 300 : 300;
    })
})


const arrowBtns1 = document.querySelectorAll(".tintuc-sukien .third-part .arrow");
const carousel1 = document.querySelector(".tintuc-sukien .third-part .carousel");
const cards1 = document.querySelectorAll(".tintuc-sukien .third-part .card");

arrowBtns1.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel1.scrollLeft += btn.id === "left" ? - 300 : 300;
    })
})





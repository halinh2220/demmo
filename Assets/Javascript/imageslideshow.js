const arrowBtns = document.querySelectorAll("#kienflex .kienflex-secondpart .arrow");
const carousel = document.querySelector("#kienflex .kienflex-secondpart .carousel");
const firstCardWidth = document.querySelector("#kienflex .kienflex-secondpart .card").offsetWidth;
const cards = document.querySelectorAll("#kienflex .kienflex-secondpart .card");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstCardWidth : firstCardWidth;
    })
})

const modal = document.querySelector("#kienflex .kienflex-secondpart .modal");

function appearModal (){
    modal.classList.add("modal1");
}

function disappearModal (){
    modal.classList.remove("modal1");
}



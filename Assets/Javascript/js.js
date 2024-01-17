function momodal1(){
    var query = document.querySelector("#homepage-content .second-content .second-content-right .uiux-main .hidden-content");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal2(){
    var query = document.querySelector("#homepage-content .second-content .second-content-right .branding-main .hidden-content");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal3(){
    var query = document.querySelector("#homepage-content .second-content .second-content-right .animation-main .hidden-content");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal4(){
    var query = document.querySelector("#homepage-content .second-content .second-content-right .illustrator-main .hidden-content");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

function momodal5(){
    var query = document.querySelector("#homepage-content .second-content .second-content-right .baobi-main .hidden-content");
    if (query.classList.contains("active"))
        query.classList.remove("active");
    else query.classList.add("active");
}

const arrowBtns = document.querySelectorAll(".modal-homepage .arrow");
const carousel = document.querySelector(".modal-homepage .between");

console.log(carousel);

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollTop += btn.id === "up" ? - 200 : 200;
    })
})

const Homepagemodal = document.querySelector(".modal-homepage");
console.log(Homepagemodal);

function appearHomepagemodal(){
    Homepagemodal.classList.add("active");
}

function disappearHomepagemodal(){
    Homepagemodal.classList.remove("active");
}

const ecogreen = document.querySelector(".wrapecogreen");

console.log(ecogreen);

function appearecogreen (){
    ecogreen.classList.add("active");
}

function disappearecogreen (){
    ecogreen.classList.remove("active");
}



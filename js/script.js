const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const closeButton = document.getElementById("closeButton");

menuButton.addEventListener("click", () => {
    menuOverlay.classList.add("active");
});

closeButton.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
});

// Close if user clicks outside the menu

menuOverlay.addEventListener("click", (event) => {

    if(event.target === menuOverlay){

        menuOverlay.classList.remove("active");

    }

});

/* ======================

Gallery

====================== */

const paintings = document.querySelectorAll(".painting");

if(paintings.length){

const title=document.getElementById("paintingTitle");
const year=document.getElementById("paintingYear");
const medium=document.getElementById("paintingMedium");
const size=document.getElementById("paintingSize");

paintings.forEach(painting=>{

painting.addEventListener("click",()=>{

title.textContent=painting.dataset.title;

year.textContent=painting.dataset.year;

medium.textContent=painting.dataset.medium;

size.textContent=painting.dataset.size;

});

});

}

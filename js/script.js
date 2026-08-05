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

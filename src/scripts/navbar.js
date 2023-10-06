const Videos = document.getElementById("Videos");
const Upload = document.getElementById("Upload");
const Demos = document.getElementById("Demos");

const buttons = document.querySelectorAll(".NavbarMenu-buttons");

function init() {
    console.log(window.location.pathname);
    if (window.location.pathname === '/videos') {
        Videos.classList.add("Select")
        Upload.classList.remove("Select")
        Demos.classList.remove("Select")
    }
    if (window.location.pathname === '/form') {
        Videos.classList.remove("Select")
        Upload.classList.add("Select")
        Demos.classList.remove("Select")
    }
    if (window.location.pathname === '/demos') {
        Videos.classList.remove("Select")
        Upload.classList.remove("Select")
        Demos.classList.add("Select")
    }
}

buttons.forEach(link =>
    link.addEventListener('click', init)
)

init();

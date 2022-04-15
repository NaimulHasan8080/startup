var dropdown = document.getElementsByClassName("dropdown-btn");
console.log(dropdown);
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";


        }
    });
}

// dark mood and light mood
let desktoptoggle = document.querySelector("#dark-desktop");
let mobiletoggle = document.querySelector("#dark-mobile");
let navbar = document.querySelector("#navbar-icon");
desktoptoggle.addEventListener("click", modeSwitch);
mobiletoggle.addEventListener("click", modeSwitch);

let isLight = false;

function modeSwitch() {
    isLight = !isLight;
    let root = document.body;

    isLight ? desktoptoggle.firstElementChild.classList = "fa-solid fa-moon" : desktoptoggle.firstElementChild.classList = "fa-solid fa-sun";

    isLight ? mobiletoggle.firstElementChild.classList = "fa-solid fa-moon" : mobiletoggle.firstElementChild.classList = "fa-solid fa-sun";

    // isLight ? navbar.classList = "navbar-light" : navbar.classList = "navbar-dark";

    root.classList.toggle("light-theme");
}
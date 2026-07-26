window.addEventListener("scroll", function () {

const header = document.querySelector(".header");

if (window.scrollY > 80) {

header.style.background = "rgba(0,0,0,.85)";

} else {

header.style.background = "rgba(0,0,0,.25)";

}

});

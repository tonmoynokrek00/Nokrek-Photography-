window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});

const images = document.querySelectorAll(".photos img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoom");
    });
});

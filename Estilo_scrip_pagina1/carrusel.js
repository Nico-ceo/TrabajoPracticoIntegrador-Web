const carouselData = [
    { src: "./inconos/estilo-formal-sin-fondo.png" },
    { src: "./inconos/estilo-informal-sin-fondo.png" },
    { src: "./inconos/estilo-urbano-sin-fondo.png" }
];

let slideIndex = 1;

function plusSlides(n) {
    carrusel(slideIndex += n);
}

function carrusel(n) {
    const numSlides = carouselData.length;

    if (n > numSlides) slideIndex = 1;
    if (n < 1) slideIndex = numSlides;

    const currentData = carouselData[slideIndex - 1];

    const slideImg = document.getElementById("slide-img");
    const slideNumberText = document.getElementById("slide-number");

    slideImg.src = currentData.src;
    slideNumberText.textContent = `${slideIndex} / ${numSlides}`;
}

document.addEventListener("DOMContentLoaded", () => {
    carrusel(slideIndex);
});
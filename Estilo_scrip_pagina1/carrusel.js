const carrusel = document.querySelector('.carrusel ul');

const btnIzq = document.querySelector('.izquierda');
const btnDer = document.querySelector('.derecha');
let indice = 0;

function mostrarSlide(n) {
    if (n >= 3) indice = 0;
    if (n < 0) indice = 2;
    carrusel.style.transform = `translateX(-${indice * 1400}px)`;
}

btnDer.onclick = () => {
    indice++;
    mostrarSlide(indice);
};

btnIzq.onclick = () => {
    indice--;
    mostrarSlide(indice);
};
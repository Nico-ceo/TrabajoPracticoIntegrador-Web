let imagenes = document.querySelectorAll(".imagen");
let indiceActual = 0;

mostrarImagen(indiceActual);

function mostrarImagen(indice) {
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = "none";
    }
    imagenes[indice].style.display = "block";
}

function derecha() {
    indiceActual++;
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    mostrarImagen(indiceActual);
}

function izquierda() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen(indiceActual);
}
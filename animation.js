let imagenesCarrousel = [
    'imagenes/carrusel1.jpg',
    'imagenes/carrusel1_ElMorro.jpg',
    'imagenes/carrusel1_sololasta.jpg',
    'imagenes/carrusel1_chorroGrande.jpg'
];
let indiceActualCarrousel =1;

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carrousel');
    mostrarImg(indiceActualCarrousel);
    carrousel(contenedor);
    iniciarCarrouselAutomático(); 
});

function mostrarImg(n) {
    let img = document.querySelector('.imagen');
    img.src = imagenesCarrousel[n];
   
}

function carrousel(carrouselStyle) {
    carrouselStyle.addEventListener('click', e => {
        let boton_atras = carrouselStyle.querySelector('.boton_atras');
        let boton_delante = carrouselStyle.querySelector('.boton_delante');
        let tgt = e.target;

        if (tgt === boton_atras) {
            cambiarImagen(-1);
        } else if (tgt === boton_delante) {
            cambiarImagen(1);
        }
    });
}

function cambiarImagen(n) {
    indiceActualCarrousel = (indiceActualCarrousel + n + imagenesCarrousel.length) % imagenesCarrousel.length;
    mostrarImg(indiceActualCarrousel);
}

function iniciarCarrouselAutomático() {
    setInterval(() => {
        cambiarImagen(1);
    }, 2500); // imagen c 3 segundos
}
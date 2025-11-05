const productos = [
  // Otoño
  [
    "Campera otoño 1##Campera ligera otoño, cómoda y cálida##./assets/img/ot/ot1.png",
    "Campera otoño 2##Chaqueta casual de otoño##./assets/img/ot/ot2.png",
    "Campera otoño 3##Abrigo corto elegante##./assets/img/ot/ot3.png",
    "Campera otoño 4##Campera con capucha##./assets/img/ot/ot4.png",
    "Campera otoño 5##Campera moderna otoño##./assets/img/ot/ot5.jpg",
    "Campera otoño 6##Campera casual##./assets/img/ot/ot6.png",
    "Campera otoño 7##Campera deportiva##./assets/img/ot/ot7.png",
    "Campera otoño 8##Campera urbana##./assets/img/ot/ot8.png",
    "Campera otoño 8##Campera urbana##./assets/img/ot/ot9.png"
  ],
  // Invierno
  [
    "Campera blanca invierno##Campera blanca térmica##./assets/img/in/in1.png",
    "Campera azul invierno##Campera azul abrigo completo##./assets/img/in/in2.png",
    "Campera gris invierno##Campera gris con capucha##./assets/img/in/in3.png",
    "Campera negra invierno##Campera negra elegante##./assets/img/in/in4.png",
    "Campera invierno 5##Campera acolchada##./assets/img/in/in5.jpg",
    "Campera invierno 6##Campera impermeable##./assets/img/in/in6.png",
    "Campera invierno 7##Campera con piel##./assets/img/in/in7.png",
    "Campera invierno 8##Campera gruesa##./assets/img/in/in8.png",
    "Campera invierno 8##Campera gruesa##./assets/img/in/in9.png"
  ],
  // Primavera
  [
    "Conjunto primavera 1##Conjunto ligero primavera##./assets/img/pr/pr1.png",
    "Conjunto primavera 2##Camisa estampada##./assets/img/pr/pr2.png",
    "Conjunto primavera 3##Pantalón casual##./assets/img/pr/pr3.png",
    "Conjunto primavera 4##Vestido primavera##./assets/img/pr/pr4.png",
    "Conjunto primavera 5##Remera floral##./assets/img/pr/pr5.jpg",
    "Conjunto primavera 6##Blusa fresca##./assets/img/pr/pr6.png",
    "Conjunto primavera 7##Short liviano##./assets/img/pr/pr7.png",
    "Conjunto primavera 8##Campera fina##./assets/img/pr/pr8.png",
    "Conjunto primavera 8##Campera fina##./assets/img/pr/pr9.png"
  ],
  // Verano
  [
    "Ropa verano 1##Remera fresca verano##./assets/img/ve/ve1.png",
    "Ropa verano 2##Short cómodo##./assets/img/ve/ve2.png",
    "Ropa verano 3##Top estampado##./assets/img/ve/ve3.png",
    "Ropa verano 4##Vestido veraniego##./assets/img/ve/ve4.png",
    "Verano 5## Proximas Ofertas##./assets/img/ve/ve9.jpg",
    "Ropa verano 6##Camisa sin mangas##./assets/img/ve/ve6.png",
    "Ropa verano 7##Bermudas##./assets/img/ve/ve7.png",
    "Ropa verano 8##Traje de baño##./assets/img/ve/ve8.png",
    "Ropa verano 8##Traje de baño##./assets/img/ve/ve5.png"
  ]
];

// Escucha los clics en los elementos de las estaciones
const estaciones = document.getElementsByClassName("estacion");
Array.from(estaciones).forEach(element => {
  element.addEventListener('click', function () {
    mostrarEstacion(element);
  });
});

function mostrarEstacion(estacion) {
  const tabla = document.getElementById("tabla");
  tabla.innerHTML = "";


  //infices para que se divida y luego se vea que son cada uno
  let indice = {
    "item1": 0,
    "item2": 1,
    "item3": 2,
    "item4": 3
  }[estacion.id];

  if (indice === undefined) return;

  let productosEstacion = productos[indice];


  for (let i = 0; i < productosEstacion.length; i += 3) {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    for (let j = i; j < i + 3 && j < productosEstacion.length; j++) {
      const [titulo, descripcion, img] = productosEstacion[j].split("##");
      const item = document.createElement("div");
      item.classList.add("producto");

      item.innerHTML = `
        <img src="${img}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
      `;

      fila.appendChild(item);
    }
    tabla.appendChild(fila);
  }
}

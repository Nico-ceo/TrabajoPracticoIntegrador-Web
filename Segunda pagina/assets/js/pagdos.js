const productos = [
  // 🍂 OTOÑO (ofertas en marzo)
  [
    "Campera otoño 1##Campera ligera otoño, cómoda y cálida##./assets/img/ot/ot1.png",
    "Campera otoño 2##Chaqueta casual de otoño##./assets/img/ot/ot2.png",
    "Campera otoño 3##Abrigo corto elegante##./assets/img/ot/ot3.png",
    "Campera otoño 4##Campera con capucha##./assets/img/ot/ot4.png",
    "Próximas ofertas##Disponible el 12/03##./assets/img/ot/ot5.jpg",
    "Campera otoño 6##Campera casual##./assets/img/ot/ot6.png",
    "Campera otoño 7##Campera deportiva##./assets/img/ot/ot7.png",
    "Campera otoño 8##Campera urbana##./assets/img/ot/ot8.png",
    "Campera otoño 9##Campera premium##./assets/img/ot/ot9.png"
  ],

  // ❄️ INVIERNO (ofertas en junio)
  [
    "Campera invierno 1##Campera blanca térmica##./assets/img/in/in1.png",
    "Campera invierno 2##Campera azul abrigo completo##./assets/img/in/in2.png",
    "Campera invierno 3##Campera gris con capucha##./assets/img/in/in3.png",
    "Campera invierno 4##Campera negra elegante##./assets/img/in/in4.png",
    "Próximas ofertas##Disponible el 15/06##./assets/img/in/in5.jpg",
    "Campera invierno 6##Campera impermeable##./assets/img/in/in6.png",
    "Campera invierno 7##Campera con piel##./assets/img/in/in7.png",
    "Campera invierno 8##Campera gruesa##./assets/img/in/in8.png",
    "Campera invierno 9##Campera térmica premium##./assets/img/in/in9.png"
  ],

  // 🌸 PRIMAVERA (ofertas en septiembre)
  [
    "Conjunto primavera 1##Conjunto ligero##./assets/img/pr/pr1.png",
    "Conjunto primavera 2##Camisa estampada##./assets/img/pr/pr2.png",
    "Conjunto primavera 3##Pantalón casual##./assets/img/pr/pr3.png",
    "Conjunto primavera 4##Vestido floral##./assets/img/pr/pr4.png",
    "Próximas ofertas##Disponible el 10/09##./assets/img/pr/pr5.jpg",
    "Conjunto primavera 6##Blusa fresca##./assets/img/pr/pr6.png",
    "Conjunto primavera 7##Short liviano##./assets/img/pr/pr7.png",
    "Conjunto primavera 8##Campera fina##./assets/img/pr/pr8.png",
    "Conjunto primavera 9##Look casual de media estación##./assets/img/pr/pr9.png"
  ],

  // ☀️ VERANO (ofertas en diciembre)
  [
    "Ropa verano 1##Remera fresca##./assets/img/ve/ve1.png",
    "Ropa verano 2##Short cómodo##./assets/img/ve/ve2.png",
    "Ropa verano 3##Top estampado##./assets/img/ve/ve3.png",
    "Ropa verano 4##Vestido veraniego##./assets/img/ve/ve4.png",
    "Próximas ofertas##Disponible el 05/12##./assets/img/ve/ve9.jpg",
    "Ropa verano 6##Camisa sin mangas##./assets/img/ve/ve6.png",
    "Ropa verano 7##Bermudas##./assets/img/ve/ve7.png",
    "Ropa verano 8##Traje de baño##./assets/img/ve/ve8.png",
    "Ropa verano 9##Conjunto liviano##./assets/img/ve/ve5.png"
  ]
];

console.log("Javascript Cargado")

// Escucha los clics en los elementos de las estaciones

function MostrarRopa(indice) {
  const tabla = document.getElementById("tabla"); 
  let articulo = "";    // se comienza vacio para evitar errores, un solo articulo
  let tresArt  = "";    // para poner tres articulos
  tabla.innerHTML = ""; // limpiar cada vez que se muestre uno diferente

  // recorro los productos de la estación seleccionada
  for (let fila = 0; fila < productos[indice].length; fila++) {

    // guardar en varias variables al mismo tiempo, se pone como si fuera un arreglo entre corchetes[]
    let [titulo, descripcion, url] = productos[indice][fila].split("##");

    // un articulo individual
    articulo += "<div class='producto'>";
    articulo += "<p>" + titulo + "</p>";
    articulo += "<p>" + descripcion + "</p>";
    articulo += "<img src='" + url + "' alt='" + titulo + "'>";
    articulo += "</div>";

    // cada 3 artículos agrego una fila nueva
    if ((fila + 1) % 3 == 0) {
      tresArt += "<div class='fila'>" + articulo + "</div>";
      articulo = ""; // reinicio para los próximos 3
    }
  }

  // agrego todo al HTML
  tabla.innerHTML = tresArt;
}

// ---- eventos ----
const estaciones = document.getElementsByClassName("estacion");

Array.from(estaciones).forEach(function (element) {
  element.addEventListener("click", function () {
    switch (element.id) {
      case "item1": MostrarRopa(0); break;
      case "item2": MostrarRopa(1); break;
      case "item3": MostrarRopa(2); break;
      case "item4": MostrarRopa(3); break;
      default: break;
    }
  });
});





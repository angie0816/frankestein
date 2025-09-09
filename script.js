// Listas de imágenes
const listaCabezas = [
  "../assets/img/frankestein/cabeza1.png",
  "../assets/img/frankestein/cabeza2.png",
  "../assets/img/frankestein/cabeza3.png",
  "../assets/img/frankestein/cabeza4.png",
  "../assets/img/frankestein/cabeza5.png",
  "../assets/img/frankestein/cabeza6.png",
];
const listaTroncos = [
 "../assets/img/frankestein/tronco1.png",
  "../assets/img/frankestein/tronco2.png",
  "../assets/img/frankestein/tronco3.png",
  "../assets/img/frankestein/tronco4.png",
  "../assets/img/frankestein/tronco5.png",
  "../assets/img/frankestein/tronco6.png",
];
const listaPatas = [
  "../assets/img/frankestein/patas1.png",
  "../assets/img/frankestein/patas2.png",
  "../assets/img/frankestein/patas3.png",
  "../assets/img/frankestein/patas4.png",
  "../assets/img/frankestein/patas5.png",
  "../assets/img/frankestein/patas6.png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();

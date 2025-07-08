const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]
const meses2 = ['Junio','Julio','Agosto','Septiembre']
const meses3 = ['Octubre','Noviembre','Diciembre']
const nombreMes = 'Enero';

const carrito = [
  {nombre: 'Celular LG g8', precio:6000},
  {nombre: 'Tele 65 plg', precio:18000},
  {nombre: 'Mouse Logi', precio:3000},
  {nombre: 'Teclado Mecánico', precio:2000},
  {nombre: 'Monitor 27 plg', precio:7000},
]

let resultado;

resultado = carrito.every(producto => producto.precio >=2000)
resultado = meses.concat(meses2,meses3)

let elemento;

elemento = document;
elemento = document.head;
elemento = document.body;
elemento = document.domain;


elemento = document.forms[0];
elemento = document.head;

console.log(elemento);

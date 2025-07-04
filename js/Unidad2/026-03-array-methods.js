const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]

const nombreMes = 'Enero';

const carrito = [
  {nombre: 'Celular LG g8', precio:6000},
  {nombre: 'Tele 65 plg', precio:18000},
  {nombre: 'Mouse Logi', precio:3000},
  {nombre: 'Teclado Mecánico', precio:2000},
  {nombre: 'Monitor 27 plg', precio:7000},
]

let total = 0;

carrito.forEach(producto => total += producto.precio);
console.log(total);

total = carrito.reduce((total, producto) => total + producto.precio,0);
console.log(total);

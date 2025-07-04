const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]

const nombreMes = 'Enero';

const carrito = [
  {nombre: 'Celular LG g8', precio:6000},
  {nombre: 'Tele 65 plg', precio:18000},
  {nombre: 'Mouse Logi', precio:3000},
  {nombre: 'Teclado Mecánico', precio:2000},
  {nombre: 'Monitor 27 plg', precio:7000},
]

let resultado;
carrito.forEach((producto, index) => {
  if (producto.nombre==='Tele 65 plg') {
    resultado=carrito[index]
  }
})
resultado=carrito.find(producto => producto.nombre === 'Tele 65 plg')
console.log(resultado);

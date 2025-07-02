const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]

const nombreMes = 'Enero';

const carrito = [
  {nombre: 'Celular LG g8', precio:6000},
  {nombre: 'Tele 65 plg', precio:18000},
  {nombre: 'Mouse Logi', precio:3000},
  {nombre: 'Teclado Mecánico', precio:2000},
  {nombre: 'Monitor 27 plg', precio:7000},
]

meses.forEach(
  mes => {
    if(mes===nombreMes)
    {
      console.log(`El mes ${mes} existe`);
      
    }
  }
)

const resultado = meses.includes(nombreMes);
console.log(resultado);

const existe2 = carrito.some(producto => producto.nombre==='Mouse Logi');
console.log(existe2);

const indice = meses.findIndex(mes => mes=== nombreMes);
console.log(indice);

const indice2 = carrito.findIndex(producto => producto.precio===2000)
console.log(indice2);

meses.forEach((mes, index) => {
  if (mes === nombreMes) {
    console.log(`${nombreMes}`);
    
  }
})
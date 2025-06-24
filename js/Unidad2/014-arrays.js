const meses = ["Enero","Febrero","Marzo","Abril","Mayo"]
meses[0]="Nuevo Mes"
meses[10]="Octubre"
meses.unshift("nuevo mes")
meses.push("Julio")
console.log(meses);

const carrito = []

const producto = {
    nombre: "Semitas",
    precio: 35,
    cantidad: 1
}

const producto2 = {
    nombre: "Cafe",
    precio: 188,
    cantidad: 1
}

carrito.push(producto,producto2)

console.log(carrito);

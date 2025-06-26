const alumnos = [
    {nombre: 'Karen Mejia', edad: '24', genero: 'F',
        nombre: 'Karen Mejia', edad: '24', genero: 'F'
    }
]

const nuevoArreglo = alumnos.map((alumno) => {
    return `${alumno.nombre} con edad ${alumno.edad}`
})

console.log(nuevoArreglo);

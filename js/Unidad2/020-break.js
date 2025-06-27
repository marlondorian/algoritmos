const autenticado = true;

if (autenticado) {
    
}

const puntos = 500;

if (puntos>400) {
    console.log('Excelente');
    
}else if (puntos>300) {
    console.log('Buen puntaje, Felicidades');
    
}

function revisarPuntos() {
    if (puntos>400) {
        console.log('Excelente');
        return
    }
    if (puntos>300) {
       console.log('Buen puntaje, Felicidades'); 
       return
    }
}

revisarPuntos()
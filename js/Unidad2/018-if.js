const puntos = 1000;
const puntos2 = '1000';

if (puntos==1000) {
    console.log('Si es igual');
    
} else {
    console.log('No es igual');
}

if (puntos2 === 1000) {
    console.log('Si es igual');
    
} else {
    console.log('No es igual'); 
}

console.log('=========Mayor y menor que=========');


const dinero = 500
const edad = 17
const pagar = 300

if (edad>=18) {
    if (dinero>pagar) {
        console.log('Puede proceder con el pago');
        
    }else{
        console.log('No tiene fondos suficientes');
    }
}else {
    console.log('Usted es menor de edad');
    
}


const dinero2 = 500
const tarjeta = false
const pagar2 = 600
const cheques = true

if (dinero2>pagar2) {
    console.log('Se puede cobrar en efectivo');
}else if (tarjeta) {
    console.log('Puede pagar con tarjeta');
}else if (cheques){
    console.log('Puede pagar con cheque');
    
}else{
    console.log('Fondos Insuficientes');
}
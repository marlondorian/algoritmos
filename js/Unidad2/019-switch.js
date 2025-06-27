const metodoPago = 'Efectivo'

switch (metodoPago) {
    case 'Efectivo':
        pagarEfectivo()
        break;
    case 'Tarjeta':
        console.log(`Pago con ${metodoPago}`);
    case 'Transferencia':
        console.log(`Pago con ${metodoPago}`);
        
    default:
        console.log('Método de pago no válido');
        break;
}

function pagarEfectivo(){
    console.log('Pagando en efectivo');
    
}
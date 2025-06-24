console.log('Const');

// Las variables con const a partir de ES6
// 1. se utilizan para definir variables que no cambiaran a lo largo del ciclo de vida de la aplicación
// 2. Las variables con const también tienen 
function ejemplo() {
    const x = 12;
    if (true) {
        const x = 23;
        console.log(x);
        
    }
    console.log(x);
    
}

ejemplo()
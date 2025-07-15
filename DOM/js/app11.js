const $busqueda = document.querySelector('.busqueda');

$busqueda.addEventListener('keydown', ()=>{
    console.log('Escribiendo');
    
})

$busqueda.addEventListener('keyup', ()=>{
    console.log('dejo de Escribir');
    
})

$busqueda.addEventListener('blur', ()=>{
    console.log('Salio del input');
    
})

$busqueda.addEventListener('copy', ()=>{
    console.log('texto copiado');
    
})

$busqueda.addEventListener('paste', ()=>{
    console.log('texto pegado');
    
})

$busqueda.addEventListener('cut', ()=>{
    console.log('texto cortado');
    
})

$busqueda.addEventListener('blur', (e)=>{
    console.log(e.target.value);
    
})


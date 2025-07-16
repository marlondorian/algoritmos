const $formulario = document.querySelector('#formulario');

$formulario.addEventListener('submit',validadFormulario)


function validadFormulario(e) {
    
    // console.log('buscando');
    
    // console.log('buscando');
    // console.log('buscando');
    // console.log('buscando');
    // console.log('buscando');
    // console.log(e.target.method);
    // console.log(e.target.action);
    // console.log(e.target['busqueda'].value);
    if (e.target['busqueda'].value==='') {
        console.log('datos no validos');
        
    }else{
        console.log('datos validos');
    }

    e.preventDefault();
}



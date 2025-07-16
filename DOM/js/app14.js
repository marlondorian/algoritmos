window.addEventListener('scroll',validadFormulario)


function validadFormulario() {
    
    const scrollPX = window.scrollY;
    console.log(scrollPX);
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top<900) {
        console.log('la seccion esta visible');
        
    } else {
        console.log('la seccion no se ve');
        
    }

}



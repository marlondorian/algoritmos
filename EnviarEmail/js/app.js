document.addEventListener('DOMContentLoaded',function (params) {
    const email = [
        email='',
        
    ]




const btnSubmit = document.getElementById('bg-pink-600')
const inputEmail = document.getElementById('email');
const inputAsunto = document.getElementById('email');
const inputMensaje = document.getElementById('email');

console.log(inputEmail.value);

inputEmail.addEventListener('blur',validar)


function validar(e){


    if (e.target.value.trim()==='') {
        mostrarAlerta(`${e.target.id}`)
        
    }
    if (e.target.id==='email') {
        
    }

    comprobarObjetoEmail
}

function mostrarAlerta (mensaje, referencia) {
    
}
function comprobarObjetoEmail() {
    if (Object.values(email).includes('e')) {
        btnSubmit.classList.add('opacity-50')
        btnSubmit.disabled = true
        return
    }
    btnSubmit.classList.remove('opacity-50')
    btnSubmit.disabled = false
}

})
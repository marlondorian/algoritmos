const btnFlotante = document.querySelector('.btn-flotante')

const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarFooter)
let count=0
function mostrarFooter(params) {

    console.log(`holamundo ${count}`);
    count++;
}
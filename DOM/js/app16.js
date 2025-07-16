const cardDiv = document.querySelector('.card');
const cardInfo = document.querySelector('.info');
const cardTitulo = document.querySelector('.titulo');
cardDiv.addEventListener('click', (e) => {
    console.log(e.target);
    
    if (e.target.classList.contains('titulo')){
        console.log('click en titulo');
    }
    if (e.target.classList.contains('precio')){
        console.log('click en precio');
    }
    if (e.target.classList.contains('card')){
        console.log('click en card');
    }    
})
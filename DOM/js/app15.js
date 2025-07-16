const cardDiv = document.querySelector('.card');
const cardInfo = document.querySelector('.info');
const cardTitulo = document.querySelector('.titulo');
cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card');
    
})


cardInfo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info');
    
})

cardTitulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en titulo');
    
})
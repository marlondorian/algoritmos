const nav = document.querySelector('.navegacion');

nav.addEventListener('click', ()=>{
    console.log('click en nav');
    
})

nav.addEventListener('mouseenter', ()=>{
    console.log('hover');
    nav.style.backgroundColor = 'red';
    
})

nav.addEventListener('mouseout', ()=>{
    console.log('unhover');
    nav.style.backgroundColor = 'transparent';
    
})
nav.addEventListener('mousedown', ()=>{
    console.log('mouse down');    
})
nav.addEventListener('mouseup', ()=>{
    console.log('mouse up');    
})

nav.addEventListener('dblclick', ()=>{
    console.log('doble click en nav');    
})
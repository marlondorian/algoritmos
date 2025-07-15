const enlace = document.createElement('a');
enlace.textContent = 'Nuevo Link';
enlace.href = 'https//google.com';
enlace.target = '_blank';

const navegacion = document.querySelector('.navegacion');

navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(navegacion);




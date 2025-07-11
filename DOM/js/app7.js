const titulo = document.createElement('p');
titulo.textContent = 'Concierto';
titulo.classList.add('categoria','concierto')
titulo.href = 'https//google.com';
titulo.target = '_blank';

const titulo2 = document.createElement('p');
titulo2.textContent = 'Reggeton';
titulo2.classList.add('titulo')
titulo2.href = 'https//google.com';
titulo2.target = '_blank';

const titulo3 = document.createElement('p');
titulo3.textContent = 'L 2,000 por persona';
titulo3.classList.add('titulo')
titulo3.href = 'https//google.com';
titulo3.target = '_blank';

const info = document.createElement('p');
info.textContent = 'L 2,000 por persona';
info.classList.add('titulo')

const imagen = document.createElement('img');
imagen.src = 'https://informauva.com/wp-content/uploads/2024/04/2019-03-29_0-1553902817.jpg'
imagen.alt = 'Imagen de la banda'

info.appendChild(titulo);
info.appendChild(titulo2);
info.appendChild(titulo3);
const card = document.createElement('div');
card.classList.add('card')
card.appendChild(info)
card.appendChild(imagen)

const contenedor = document.querySelector('.hacer .contenedor-cards')

console.log(card);

contenedor.insertBefore(card, contenedor.children[1]);

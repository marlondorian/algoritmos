const navegacion = document.querySelector('.navegacion');



console.log(navegacion);
console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[0]);
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);



const card = document.querySelector('.card');
console.log(card.parentElement.parentElement.parentElement);

console.log(card.children[0].src);
console.log(card.nextElementSibling);


const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

navegacion.removeChild(navegacion.children[2])
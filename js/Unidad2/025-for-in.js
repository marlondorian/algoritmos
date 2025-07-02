const carro = {
  modelo: 'L200',
  año: 2025,
  motor: 'L2.4'
}

for (let propiedad in carro) {
  console.log(propiedad);
  ;
  
}

console.log('------------------------------');
for (let propiedad in carro) {
  console.log(carro[propiedad]);
  ;
  
}
/* Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.*/ 

let array = [];
let valor = 20;

for (let i = 0; i < valor; i++) {
    let numerosAleatorios = Math.floor(Math.random() * 100);
    array.push(numerosAleatorios);
}

console.log(`El arreglo de numero aleatrios es: ${array}`);

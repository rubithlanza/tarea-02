/*Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
introducido por el usuario a través de un prompt. */

let array = [];
const n = parseInt(prompt('Digite un numero: '));

for (let i = 0; i < n; i++) {
    let numerosAleatorios = Math.floor(Math.random() * 1000);
    array.push(numerosAleatorios);
}

console.log(`El arreglo de numero aleatrios es: ${array}`);
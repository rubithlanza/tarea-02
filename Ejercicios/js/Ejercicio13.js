/*Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt. */

const numero = parseInt(prompt('Digite un numero: '));

let i = 1;
console.log(`Los numeros del 1 al ${numero}:`);
while (i <= numero) {
    console.log(i); 
    i++;
}
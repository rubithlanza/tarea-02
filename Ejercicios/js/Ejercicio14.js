/*Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt. */

const numero = parseInt(prompt('Digite un numero: '));

let i = 1;
console.log(`Los numeros del 1 al ${numero} de 2 en 2:`);
while (i <= numero) {
    console.log(i); 
    i+=2;
}
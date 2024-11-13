/*Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.*/

const numero = parseInt(prompt('Digite un numero: '));

let i = numero;
console.log(`Los numeros del ${numero} al 1:`);
while (i >= 1) {
    console.log(i); 
    i--;
}
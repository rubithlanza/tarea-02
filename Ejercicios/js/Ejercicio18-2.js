/*Todos los ejercicios de while anteriores los debe replicar con el ciclo for. */
/*Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt. */

const numero = parseInt(prompt('Digite un numero: '));

console.log(`Los numeros del 1 al ${numero} de 2 en 2:`);
for (let i = 1; i <= numero; i+=2) {
    console.log(i);
}
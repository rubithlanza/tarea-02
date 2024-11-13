/*Todos los ejercicios de while anteriores los debe replicar con el ciclo for. */
/*Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
ingresa el usuario en un prompt.*/

const numero = parseInt(prompt('Digite un numero: '));

console.log(`Los numeros del ${numero} al 1:`);
for (let i = numero; i >=1; i--) {
    console.log(i); 
}


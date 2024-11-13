/*Todos los ejercicios de while anteriores los debe replicar con el ciclo for. */
/*Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12. */

const numero = parseInt(prompt('Digite un numero: '));

console.log(`La table de multiplicar del numero ${numero} hasta el 12`);
for (let i = 1; i <= 12; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`);
}

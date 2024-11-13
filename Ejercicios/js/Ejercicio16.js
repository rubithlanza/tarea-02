/*Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12. */

const numero = parseInt(prompt('Digite un numero: '));

let i = 1;

console.log(`La table de multiplicar del numero ${numero} hasta el 12`);

while(i <=12){
    console.log(`${numero} * ${i} = ${numero * i}`);
    i++;
}
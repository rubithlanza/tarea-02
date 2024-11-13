/*Crear un programa que determine si un número introducido en un Prompt es divisible
por 5 o no, mostrar el resultado con console.log. */

const numero = parseInt(prompt('Digite un numero: '));

if (numero % 5 ===0) {
    console.log(`El numero (${numero}) es divisible por 5`);
}else{
    console.log(`El numero (${numero}) no es divisible por 5`);
}
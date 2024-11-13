/*Escriba un programa que pida un número y diga si es divisible por 2. */

const numero = parseInt(prompt('Ingrese un numero'));

if(numero % 2 ===0){
    console.log(`El numero ${numero} es divisible entre 2`);
}else{
    console.log(`El numero ${numero} no es divisible entre 2`);
}
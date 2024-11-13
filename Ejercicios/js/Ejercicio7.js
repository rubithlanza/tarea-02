/*Crear un programa que determine si un número introducido en un Prompt es par o
no, la respuesta será mostrada en la consola. */

const numero = parseInt(prompt('Digite un numero: '));

if(numero === 0){
    console.log('El numero ingresado es cero');
    
}else if(numero % 2===0){
    console.log('El numero ingresado es par');
} else{
    console.log('El numero ingresado es impar');
    
}
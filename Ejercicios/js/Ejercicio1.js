/*Escriba un programa que pida dos números y escriba en la consola cuál es el mayor. */

const numero1 = parseInt(prompt('Ingrese el primer numero: '));
const numero2 = parseInt(prompt('Ingrese el segundo numero: '));

if(numero1>numero2){
    console.log(`El numero ${numero1} es mayor que el numero ${numero2}`);
}else if(numero2>numero1){
    console.log(`El numero ${numero2} es mayor que el numero ${numero1}`);
} else if(numero1===numero2){
    console.log('Ambos numeros son iguales ');
    
}
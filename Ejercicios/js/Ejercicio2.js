/*Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres. */

const numero1 = parseInt(prompt('Ingrese el primer numero: '));
const numero2 = parseInt(prompt('Ingrese el segundo numero: '));
const numero3 = parseInt(prompt('Ingrese el tercer numero: '));

if(numero1>numero2 && numero1>numero3){
    console.log(`El numero ${numero1} es mayor que los numeros: ${numero2}, ${numero3}`);
}else if(numero2>numero1 && numero2>numero3){
    console.log(`El numero ${numero2} es mayor que los numeros: ${numero1}, ${numero3}`);
}else if(numero3>numero1 && numero3>numero1){
    console.log(`El numero ${numero3} es mayor que los numeros: ${numero1}, ${numero2}`);
}else if(numero1===numero2 && numero1===numero3){
    console.log('Todos los numeros son iguales ');
    
}
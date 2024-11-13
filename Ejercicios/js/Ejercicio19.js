/*Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3). */

const numero = parseInt(prompt('Digite un numero: '));

let divisor = 0;
console.log('Los divisores son:');

for (let i = 0; i < numero; i++) {
    if(numero % i ===0){
        divisor +=i;
        console.log(i);
    }
}
if (numero === divisor) {
    console.log(`El numero ${numero} es perfecto`);
}else{
    console.log(`El numero ${numero} no es perfecto`);
}
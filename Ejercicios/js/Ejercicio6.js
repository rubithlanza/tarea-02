/*Escribir un programa que escriba en pantalla los divisores de un número dado. */

const numero = parseInt(prompt('Digite un numero: '));


console.log(`Los divisores del numero ${numero} son:`);
for (let i = 0; i <= numero; i++) {
    if(numero % i === 0){
       // console.log(`Los divisores del numero ${numero} son:`);
        console.log(i);
        
        
        
    }
}
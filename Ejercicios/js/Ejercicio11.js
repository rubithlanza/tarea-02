/*Determinar si una palabra empieza con mayúscula o no. */

const  frase = prompt('Ingrese una palabra: ');

const verificarFrase = frase.charAt(0);

if (verificarFrase === verificarFrase.toUpperCase()) {
    console.log('La palabra ingresada fue escrita al inicio con mayusculas');
    
} else {
    console.log('La palabra ingresada no inicio con mayuscula');
    
}
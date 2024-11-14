/*El usuario ingresa un string con varias palabras separadas por coma en un popup y se
deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). */
let letra = prompt('Ingrese un string con letras separadas por coma: ');

let arrayLetra = letra.split(',');

let arrayNumero = arrayLetra.map(Number);

console.log('El nuevo array es:', arrayNumero);

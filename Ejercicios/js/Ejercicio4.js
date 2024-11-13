/*Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a. */

const frase = prompt('Ingrese una frase: ');
const letra = 'a';
let contadorFrase = 0;

for (let i = 0; i < frase.length; i++) {
    if(frase.charAt(i)===letra){
        contadorFrase++;
    }
}

console.log(`La cantidad de veces de la letra -${letra}- de la frase (${frase}) son: ${contadorFrase}`);

/*Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de
las vocales. */

const frase = prompt('Ingrese una frase: ');
const letraFraseM = frase.toLowerCase ;
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

for (let i = 0; i < letraFraseM.length; i++) {
    switch (letraFraseM[i]) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
        default:
            break;
    }
}

console.log(`La cantidad de vocales de la frase (${frase}) son:\n a: ${contadorA}\n e: ${contadorE} \n i: ${contadorI}\n o: ${contadorO} \n u: ${contadorU}`);

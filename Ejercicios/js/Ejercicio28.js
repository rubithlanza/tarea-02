/*Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
contenga sólo las palabras que empiezan con una vocal. */
function Vocales(array=[]){
    let validar = /^[aeiouAEIOU]/;
    let letrasVocal =[];
    for (let i = 0; i < array.length; i++) {
        if(validar.test(array[i])){
            letrasVocal.push(array[i]);
        }
    }
    console.log(`El arreglo nuevo de vocales es: [${letrasVocal.join(',')}]`);
}

Vocales(['cafe', 'amarillo', 'casa', 'uva', 'oso', 'arcoiris', 'fresa']);
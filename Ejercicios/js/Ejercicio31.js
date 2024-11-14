/*Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1]. */

function invertirNumeros(array=[]){
    let inverso =[];
    for (let i = array.length-1; i >= 0; i--) {
        inverso.push(array[i]);
    }
    console.log(`El nuevo array es: [${inverso.join(',')}]`);
}

invertirNumeros([4,5,6,7]);


/*Crear una función que tome como parámetro un arreglo de números, retornar el número
menor, si es un número negativo mostrar su valor absoluto.*/
function funcionMenor(array=[]){
    let numeroMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i]< numeroMenor){
            numeroMenor = array[i];
        }
    }
    console.log(`El numero menor del arreglo es: ${numeroMenor}`);
    if(numeroMenor<0){
        let absoluto = Math.abs(numeroMenor);
        console.log(`El numero es negativo y su valor absoluto es: ${absoluto}`);
    }else{
        console.log('El numero no es negativo!');
    }
    
}

funcionMenor([4,53,-78, 1])


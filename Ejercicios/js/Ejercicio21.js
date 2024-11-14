/*Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo. */

const numero = prompt('Digite algo acontinuacion: ');

function validarNumero(numero){
    const valores = /^\d+$/;
    return valores.test(numero);
}

if(validarNumero(numero)){
    console.log('Usted a ingresado una serie de numeros');
}else{
    console.log('Los datos ingresados no son numericos');
}
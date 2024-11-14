/*Crear un programa que determine si un string introducido por un usuario inicia con un
número o con una letra. */
const palabra = prompt('Ingrese una palabra: ');
const validar = /^[a-zA-Z]/;
if(validar.test(palabra)){
    console.log('Haz iniciado con un string');
}else{
    console.log('Haz iniciado con un numero');
    
}
/*Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no. */

let array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const palabra = prompt('Ingrese el nombre de un color: ');

if(array.includes(palabra.toLowerCase())){
    console.log(`El color ${palabra} se encuentra en el arreglo!`);
}else{
    console.log(`El color ${palabra} no se encuentra en el arreglo!`);
    
}
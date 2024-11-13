/*Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
determine si el triángulo es válido o no. */

const anguloA = parseInt(prompt('Digite el primer ángulo'));
const anguloB = parseInt(prompt('Digite el segundo ángulo'));
const anguloC = parseInt(prompt('Digite el tercer ángulo'));

const resultados= anguloA + anguloB + anguloC;

if(resultados===180){
  console.log('Los ángulos ingresados forman parte de un triangulo');
} else{
  console.log('Los angulos ingresados no son de un triángulo ');
}
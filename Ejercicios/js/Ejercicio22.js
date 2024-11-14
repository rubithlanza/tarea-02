/*Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio */

//a.
let arrayUno =[1,2,3,4,5,6];
let i =0;
console.log('Utilizando While');
while (i<arrayUno.length) {
    console.log(arrayUno[i]);
    i++;
}
//b.
let arrayDos =[1,2,3,4,5,6];
console.log('Utilizando For');
for (let i = 1; i < arrayDos.length; i++) {
    console.log(arrayDos[i]);
}
//c.
let arrayTres =[1,2,3,4,5,6];
console.log('Utilizanso ForEach');
arrayTres.forEach((numero)=>{
    console.log(numero); 
});

//d.
let arrayCuatro =[1,2,3,4,5,6];
console.log('Suma del arreglo');
let suma = arrayCuatro.reduce((total, numero)=> total + numero, 0);
console.log(`El total es: ${suma}`);

//e.
let arrayCinco =[1,2,3,4,5,6];
console.log('Nuevo Array');
let arrayNuevo =[];
for (let i = 0; i < arrayCinco.length; i++) {
    arrayNuevo.push(arrayCinco[i] + 1);
}
console.log(`El nuevo array es: [${arrayNuevo.join(',')}]`);
//f.
let arraySexto =[1,2,3,4,5,6];
console.log('Sacar el promedio del Array');
let sumatoria = 0;
for (let i = 0; i < arraySexto.length; i++) {
    sumatoria += arraySexto[i];
}
let promedio = sumatoria / arraySexto.length;
console.log(`El resultado es: ${promedio}`);



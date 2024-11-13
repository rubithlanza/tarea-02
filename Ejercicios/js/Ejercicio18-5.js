/*Todos los ejercicios de while anteriores los debe replicar con el ciclo for. */
/*Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario. */

let n = parseInt(prompt('Digite el primer numero: '));
let m = parseInt(prompt('Digite el segundo numero: '));

//Para realizar el cambio de la variable por si el primer numero es menor que el otro 

if(n>m){
    let numero = n;
    n = m;
    m = numero;
}

let suma = 0;
console.log(`Los numero pares entre ${n} y ${m} son:`);
for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
        suma += i; 
        console.log(i);
    }
}

console.log(`La sumatoria de ellos es: ${suma}`);
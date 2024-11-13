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
while(n<= m){
    if (n % 2 === 0) {
        suma += n; 
        console.log(n);
    }
    n++;
}
console.log(`La sumatoria de ellos es: ${suma}`);
//console.log(`La suma de los numero pares entre ${n}, ${m} es: ${suma}`);



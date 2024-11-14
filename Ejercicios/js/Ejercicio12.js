/*Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
"Vuelva a intentarlo" */
const numero = parseInt(prompt('Digite un numero del 1 al 10: '));
let numerosAleatorios = Math.floor(Math.random() * 10) + 1;

if(numero>10){
    console.log('NUMERO INCORRECTO');
}else{
    if(numero === numerosAleatorios){
        console.log('Buen trabajo!');
    }else if(numero!= numerosAleatorios){
        console.log('Vuelva a intentarlo');
        console.log(`El numero correcto era: ${numerosAleatorios}`);
        
    }
}
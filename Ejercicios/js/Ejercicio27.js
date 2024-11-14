/*Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
solo los números pares, pista: utilizar reduce(). */

function numerosPares(array=[]){
    let pares = array.reduce((conteoPares, numero)=>{
        if (numero % 2 ===0) {
            conteoPares.push(numero);
        }
        return conteoPares;
    }, []);
    console.log(`El arreglo de numeros pares es: [${pares}]`);
}

numerosPares([1,2,3,4,5,6,7,8,9,10]);
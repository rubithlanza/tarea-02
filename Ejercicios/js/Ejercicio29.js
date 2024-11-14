/*Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
vacío debe devolver cero.*/

function sacarPromedio(array = []){
    if(array.length ===0){
        return 0;
    }else{
        let sumatoria = 0;
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]); 
            sumatoria +=array[i];
        }
        let promedio = sumatoria / array.length;
        return promedio.toFixed(2);
       // console.log(`El promedio del arreglo ${array} es de: ${promedio.toFixed(2)}`);
    }
}
console.log(`El promedio del arreglo es de: ${sacarPromedio([90, 56, 78])}`);
console.log(`El promedio del arreglo es de: ${sacarPromedio([])}`);





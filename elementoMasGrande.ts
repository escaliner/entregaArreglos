/*
Estructuras de Datos Encontrar el elemento más grande del arreglo 
Dado el siguiente arreglo  [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función para determinar si el 
número es par o impar*/

import * as uk from "readline-sync";

let numerosA: number[] = [4, 7, 9, 3, 1, 45, 67, 97, 29, 78, 11, 16]
let mayor: number = 0;

for (let i: number = 1; i <= numerosA.length; i++){
    if (numerosA[i] > mayor) {
        mayor = numerosA[i];
    }

}
console.log(`el numero mas grande es ${mayor}`);

function esPar(mayor: number): string {
    if (mayor % 2 == 0) {
        return "Es Par";
    }     
    return "es Impar"
}

console.log(esPar(mayor));



// ts-node elementoMasGrande
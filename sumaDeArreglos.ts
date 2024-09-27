/*Sumar Dos Arreglos • Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo • El arreglo tiene dimensión 6 
y los números de los dos
vectores los carga el usuario

Ejemplo:
v1 = 1, 3, 7, 9, 9, 5 
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9
*/

import * as uk from "readline-sync";

let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let sumaArr: number[] = new Array(6);

// for (let i: number = 0; i < v1.length; i++){
//     v1[i]=questionInt("Ingrese el numero a almacenar en el arreglo 1:  ")
// }
// for (let i: number = 0; i < v2.length; i++){
//     v2[i]=questionInt("Ingrese el numero a almacenar en el arreglo 2:  ")
// }

function rellenarArreglo(nombreArreglo: string): number[] {
    let arreglo: number[] = new Array(6);
    for (let i: number = 0; i < arreglo.length; i++) {
    arreglo[i]=uk.questionInt(`Ingrese el numero a almacenar en el arreglo ${nombreArreglo}:  `)
    }
    return arreglo;
 }

function sumarArreglos(v1: number[], v2:number[]){

    for (let i: number = 0; i < sumaArr.length; i++) {
        sumaArr[i] = v1[i] + v2[i];
        }
   }
 

// for (let i: number = 0; i < sumaArr.length; i++) {
//     sumaArr[i] = v1[i] + v2[i];
// }
v1 = rellenarArreglo("1");
v2 = rellenarArreglo("2");
sumarArreglos(v1, v2);


console.log(`el contenido del arreglo 1: ${v1}`)
console.log(`el contenido del arreglo 2: ${v2}`)
console.log(`La suma de los arreglos es: ${sumaArr}`)



//ts-node sumaDeArreglos
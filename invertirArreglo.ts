/*Invertir Arreglo
• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero*/

import * as uk from "readline-sync";
let lengthArr: number;

lengthArr = uk.questionInt("Ingrese la dimension del arreglo: ");

function rellenarArreglo(lengthArr:number): number[] {
    let arreglo: number[] = new Array(lengthArr);
    for (let i: number = 0; i < arreglo.length; i++) {
        arreglo[i] = uk.questionInt(`Ingrese el numero a almacenar en el arreglo:  `)
    }
    return arreglo;
}

function inversorDeArreglos(arreglo: number[]):number[] {
    let arregloInvertido: number[] = [];
    let posicion: number = 0;
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloInvertido[posicion] = arreglo[i];
        posicion++;
    }

    return arregloInvertido;
}    
let arreglo = rellenarArreglo(lengthArr);
let arregloInvertido = inversorDeArreglos(arreglo);

console.log(`el arreglo Original es: ${arreglo}`)
console.log(`el arreglo invertido es: ${arregloInvertido}`)
// ts-node invertirArreglo
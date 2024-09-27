import * as uk from "readline-sync";
/*
Estructuras de Datos – Arreglos

Ejercicio – Suma Elementos Arreglo

• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario */

let n:number=uk.questionInt("Ingrese la cantidad de valores que va a contener su arreglo: ")
let largoN: number[] = new Array(n);
let sumaTotal: number = 0;
let i: number = 0;
for (i = 0; i < n ; i++){
 largoN[i]=uk.questionInt(`ingrese el numero que va a contener la posicion ${i+1}:  `)
    sumaTotal+= largoN[i];

}

console.log(`la suma del arreglo es: ${sumaTotal}`)

//ts-node sumaArreglos
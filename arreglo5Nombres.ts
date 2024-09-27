/*1) Crear un arreglo de letras e imprimirlo 
2) Dado un array con nombres de tamaño 5, pedir 
al usuario que ingrese un nombre y verificar si está 
en el arreglo.Imprimir el arreglo y si está o no en
él.*/

import * as uk from "readline-sync";

let arreglo1: string[] = new Array("Bruno", " Matias", "Santiago", "Felipe", "Tomas");


let nombreIng = uk.question("ingrese el nombre para saber si esta en la lista: ");
let esta: boolean = false;
let posicion: number = 0;

for (let i: number = 0; i < 5; i++) {
    if (arreglo1[i] == nombreIng) {
        esta = true;
        posicion = i;
    }

}
if (esta) {
    console.log(`el nombre solicitado esta en la lista ${nombreIng}, se encuentra en la posicion ${posicion}. `)
} else {
    console.log(`el nombre ${nombreIng} no se encuentra en la lista. `)
    }


// ts-node arreglo5Nombres
/*Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/
import * as uk from "readline-sync";
let lengthArr: number;

lengthArr = uk.questionInt("Ingrese la dimension del arreglo: ");

function rellenarArreglo(lengthArr: number): number[] {
    let arreglo: number[] = new Array(lengthArr);
    for (let i: number = 0; i < arreglo.length; i++) {
        arreglo[i] = uk.questionInt(`Ingrese el numero a almacenar en el arreglo:  `)
    }
    return arreglo;
}
function clasificadoraDeArreglos(arreglo: number[]) : void {
    let pos: number = 0;
    let neg: number = 0;
    let ceros: number = 0;
    for (let i: number = 0; i < arreglo.length; i++) {
        if (arreglo[i] == 0) {
            ceros++;
        } else if (arreglo[i] > 0) {
            pos++;
        } else {
            neg++;
        }
    }
    console.log(`Hay ${pos} numeros positivos, ${neg} numeros negativos y ${ceros} cero/s.`)
}

let arreglo = rellenarArreglo(lengthArr);
clasificadoraDeArreglos(arreglo);

//ts-node detectorDe0
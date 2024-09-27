import * as uk from "readline";
/*   Ejercicio – Completar Arreglo
• Llenar un array de 10 posiciones con números aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función Azar, que se base en las funciones disponibles en el paquete
 Math: -Math.random() devuelve un nro al azar entre 0 y 1.*/
 

function Azar(): number {
    // Generar un número aleatorio entre 0 y 99
    return Math.floor(Math.random() * 99);
}   // el Math.floor()se utiliza para redondearel numero a un entero

function llenarArrayConAleatorios(): number[] {
    const arrayAleatorio: number[] = new Array(10); // Crear un array de 10 posiciones

    for (let i = 0; i < 10; i++) {
        arrayAleatorio[i] = Azar(); // llamo a la funcion azar para completar en la posicion i con un numero al azar
    }

    return arrayAleatorio;
}

// Llenar el array y mostrar el resultado
const numerosAleatorios: number[] = llenarArrayConAleatorios();
console.log(numerosAleatorios); 

// ts-node array 
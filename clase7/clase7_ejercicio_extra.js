// function diezSiguientes(numero) {
//     let i = numero;
//     while(i < numero+10) {
//         i++
//         console.log(i)
//     }
// }
// diezSiguientes(15)


// let i = 0;
// while(i < 57) {
//     i += 3
//     console.log(i)
// }

// function sumatoria() {
//     let i = 0;
//     let sumatoria = 0;
//     while(i < 100){
//         sumatoria = sumatoria + i
//         i++
//     }
//     return sumatoria
// }
// console.log(sumatoria())

// function cadenaTexto(string) {
//     for (let i = 0; i < string.length; i++) {
//         console.log(string[i].toUpperCase())
//     }
// }
// cadenaTexto('practicando el uso de los ciclos o bucles')

function numerosPositivos(array) {
    let numerosPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            numerosPares.push(array[i])
        }
    }
    return numerosPares
}

console.log(numerosPositivos([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

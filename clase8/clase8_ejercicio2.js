let graduadosHTML5 = '30 45 25 34 18 23 16 50 72 70'
let graduadosCSS3 = '50 45 71 34 23 45 65 75 63 43 74 70'
let graduadosJAVASCRIPT = '70 65 58 45 23 57 34 17 72'
let graduadosNODEJS = '45 56 73 34 65 72 70 32'

graduadosHTML5 = graduadosHTML5.split(' ')
graduadosCSS3 = graduadosCSS3.split(' ')
graduadosJAVASCRIPT = graduadosJAVASCRIPT.split(' ')
graduadosNODEJS = graduadosNODEJS.split(' ')

let arrayConsolidado = [graduadosHTML5,graduadosCSS3,graduadosJAVASCRIPT,graduadosNODEJS]

function promedio(array,numero) {
    if (numero > 0 && numero <=4) {
        let seleccion = array[numero-1];
        let graduados = 0;
        for (let i = 0; i< seleccion.length; i++) {
            graduados += parseInt(seleccion[i])
        }
        return Math.floor(graduados/seleccion.length)
    } else {
        return 'Valores posibles:\n1 = HTML5\n2 = CSS3\n3 = JAVASCRIPT\n4 = NODEJS'
    }
}

console.log(promedio(arrayConsolidado,4))
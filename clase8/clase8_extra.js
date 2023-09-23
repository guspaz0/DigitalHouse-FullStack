function encotrarElNumero(array,numero){
    if (array.includes(numero)) {
        return 'El número '+numero+' si existe en el array'
    } else {
        return 'El valor solicitado no existe'
    }
}

console.log(encotrarElNumero([1,2,3,4,5,6],6))

function juegoDeTrompito(array,vueltas) {
    return array[vueltas]
}

let array = ['Toma 1', 'Toma 2', 'Pon 1', 'Pon 2', 'Todos ponen', 'Toma todo']
let numeroAleatoreo = Math.floor(6*Math.random())

console.log(juegoDeTrompito(array, numeroAleatoreo))


function sumatoriaParImpar(array) {
    let par = 0;
    let impar = 0;
    for (let i = 0; i< array.length; i++) {
        array[i] % 2 === 0? par += array[i] : impar += array[i];
    }
    return [par, impar]
}


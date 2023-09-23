function calculadora (a,b,operacion) {
    let simbol = ''
    operacion === 'sumar'? simbol = '+': null;
    operacion === 'restar'? simbol = '-': null;
    operacion === 'multiplicar'? simbol = '*': null;
    operacion === 'dividir'? simbol = '/': null;
    
    switch (operacion) {
        case 'sumar':
            return console.log(`el resultado de ${operacion} ${a} ${simbol} ${b} = ${a+b}`)
        case 'restar':
            return console.log(`el resultado de ${operacion} ${a} ${simbol} ${b} = ${a-b}`)
        case 'multiplicar':
            return console.log(`el resultado de ${operacion} ${a} ${simbol} ${b} = ${a*b}`)
        case 'dividir':
            return console.log(`el resultado de ${operacion} ${a} ${simbol} ${b} = ${a/b}`)
        default:
            console.log('Las operaciones aceptadas son: sumar - restar - multiplicar- dividir')
            break
    }
}

calculadora(2,2,'dividir')
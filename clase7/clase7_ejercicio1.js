let movimCuenta = [800, 300, -200, -700]

function calcularSaldos(array) {
    let retiros = 0;
    let depositos = 0;
    let saldo = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] <0) {
            retiros += array[i]
            saldo += array[i]
        } else {
            depositos += array[i]
            saldo += array[i]
        }
    }
    return [retiros*-1, depositos, saldo]
}

console.log(calcularSaldos(movimCuenta))



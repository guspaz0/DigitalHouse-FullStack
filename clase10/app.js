const fs = require('fs');
let bicicletas = require('./datosBici');

function buscarBici(id) {
    return bicicletas.filter((x) => x.id === id)[0]
}

function venderBici(id) {
    let bici = buscarBici(id)
    if (bici) {
        if (bici.vendida === 'no') {
            let arrayAnterior = bicicletas.filter((x) => x.id !== id)
            fs.writeFileSync(__dirname+'/bicicletas.json', JSON.stringify([...arrayAnterior, {...bici, vendida: 'si'}]))
            return {...bici, vendida: 'si'}
        } else {
            return 'Bicicleta ya vendida'
        }
    } else {
        return 'Bicicleta no encontrada'
    }
}

function biciParaLaVenta(){
    return bicicletas.filter((x) => x.vendida === 'no')
}

function totalDeVentas() {
    let bicisVendidas = bicicletas.filter((x) => x.vendida === 'si')
    return bicisVendidas.reduce((totalVentas, bici) => totalVentas + bici.precio, 0)
}

function aumentoBici(porcentaje) {
    let bicisVendidas = bicicletas.filter((x) => x.vendida === 'si')
    let aumentoNoVendidas = biciParaLaVenta().map((x) => {return {...x, precio: x.precio*(1+(porcentaje/100))}})
    fs.writeFileSync(__dirname+'/bicicletas.json', JSON.stringify([...bicisVendidas, ...aumentoNoVendidas]))
    return aumentoNoVendidas
}

function biciPorRodado(rodado){
    return bicicletas.filter((x) => x.rodado === rodado)
}

function listarTodasLasBici() {
    for (let bici in bicicletas) {
        console.log(bicicletas[bici])
    }
}


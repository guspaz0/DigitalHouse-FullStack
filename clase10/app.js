const fs = require('fs');
let bicicletas = require('./datosBici');

function buscarBici(id) {
    let bici = bicicletas.filter((x) => x.id === id)[0]
    return bici
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

console.log(venderBici(6))
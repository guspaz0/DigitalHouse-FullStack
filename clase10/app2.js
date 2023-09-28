const fs = require('fs');
let bicicletas = require('./datosBici');

let dhBici = {
    bicicletas: bicicletas,
    buscarBici:function (id) {
        return this.bicicletas.filter((x) => x.id === id)[0]
    },
    venderBici: function (id) {
        let bici = this.buscarBici(id)
        if (bici) {
            if (bici.vendida === 'no') {
                let arrayAnterior = this.bicicletas.filter((x) => x.id !== id)
                fs.writeFileSync(__dirname+'/bicicletas.json', JSON.stringify([...arrayAnterior, {...bici, vendida: 'si'}]))
                return {...bici, vendida: 'si'}
            } else {
                return 'Bicicleta ya vendida'
            }
        } else {
            return 'Bicicleta no encontrada'
        }
    },
    biciParaLaVenta: function (){
        return this.bicicletas.filter((x) => x.vendida === 'no')
    },
    totalDeVentas: function () {
        let bicisVendidas = this.bicicletas.filter((x) => x.vendida === 'si')
        return bicisVendidas.reduce((totalVentas, bici) => totalVentas + bici.precio, 0)
    },
    aumentoBici: function (porcentaje) {
        let bicisVendidas = this.bicicletas.filter((x) => x.vendida === 'si')
        let aumentoNoVendidas = this.biciParaLaVenta().map((x) => {return {...x, precio: x.precio*(1+(porcentaje/100))}})
        fs.writeFileSync(__dirname+'/bicicletas.json', JSON.stringify([...bicisVendidas, ...aumentoNoVendidas]))
        return aumentoNoVendidas
    },
    biciPorRodado: function (rodado){
        return this.bicicletas.filter((x) => x.rodado === rodado)
    },
    listarTodasLasBici: function () {
        for (let bici in this.bicicletas) {
            console.log(this.bicicletas[bici])
        }
    }
}

dhBici.listarTodasLasBici()













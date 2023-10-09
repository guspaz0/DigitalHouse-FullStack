const autosImportados = require('./autos');

let concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patente) {
       let respuesta = this.autos.find(function(x) {
          return x.patente === patente
       })
       if (respuesta) {
          return respuesta
       } else {
          return null
       }
    },
    venderAuto: function(patente) {
        //console.log(this.autos.indexOf(this.buscarAuto(patente)))
        
        return this.autos[this.autos.indexOf(this.buscarAuto(patente))] = {...this.buscarAuto(patente), vendido: true}
    }
}

concesionaria.venderAuto('JJK116')
console.log(concesionaria.autos)
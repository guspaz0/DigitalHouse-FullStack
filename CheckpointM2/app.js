const fs = require('fs')

let marca = ['Ford','Fiat']

let vehiculos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        precio: 150000,
        km: 200,
        color: 'Azul',
        cuotas: 12,
        anio: 2019,
        patente: 'APL123',
        vendido: false
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        precio: 100000,
        km: 0,
        color: 'Blanco',
        cuotas: 14,
        anio: 2019,
        patente: 'JJK116',
        vendido: false
    }
]


let autosImportados = require('./autos')

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
   venderAuto: function(pat) {
      let autovendido = this.buscarAuto(pat)
      if (autovendido) {
         autovendido.vendido = true
         return autovendido
      } else {
         return null
      }
   },
   autosParaLaVenta: function () {
      let autosdisponibles = this.autos.filter(x => x.vendido == false)
      return autosdisponibles
   },
   autosNuevos: function() {
      let autos0 = this.autosParaLaVenta().filter(x => x.km < 100)
      return autos0
   },
   listaDeVentas: function() {
      let lista = []
      for (let i = 0; i < this.autos.length; i++) {
         if(this.autos[i].vendido === true) {
            lista.push(this.autos[i].precio)
         }
      }
      return lista
   },
   totalDeVentas: function () {
      return this.listaDeVentas().reduce((contador,precio) => contador+precio,0)
   },
   puedeComprar: function (auto, persona) {
      if (persona.capacidadDePagoTotal >= auto.precio) {
         if (persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas)) {
            return true
         } else {
            return false
         }
      }  
   },
   autosQuePuedeComprar: function (persona) {
    let puede = []
    this.autosParaLaVenta().map((x) => {
       if (this.puedeComprar(x,persona) == true){
          return puede.push(x)
        }
    })
      // for (let i = 0; i < this.autosParaLaVenta().length; i++) {
      //    if (this.puedeComprar(this.autosParaLaVenta()[i],persona)) {
      //        puede.push(this.autosParaLaVenta()[i])
      //    }
      // }
      return puede
   }
}

let juancito = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

console.log(concesionaria.autosQuePuedeComprar(juancito))
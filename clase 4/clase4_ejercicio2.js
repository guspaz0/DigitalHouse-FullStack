let pagoMes = 5000;

let consumoKWH = 200;

let mensaje = console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}, en base al ajuste tarifario
(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),
cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes*1.2}`)

consumoKWH >= 300? mensaje : pagoMes;
const fs = require('fs');
const ruta = __dirname+'/mensaje.txt';
const contenido = fs.readFileSync(ruta,'utf-8');

let mensaje = 'editando'

fs.writeFile(ruta, contenido, (error) => error? console.log('error al escribir') : console.log('ok'))

console.log()
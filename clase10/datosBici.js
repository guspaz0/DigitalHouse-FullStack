const fs = require('fs')
const bicicletas = fs.readFileSync(__dirname+'/bicicletas.json', 'utf-8');

module.exports = JSON.parse(bicicletas)
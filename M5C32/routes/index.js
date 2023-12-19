var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ejercicio Modulo 5 clase 32' });
});

router.post('/form', function(req,res) {
  console.log(req.body)
  res.render('respuesta', {title: 'Ejercicio Modulo 5 clase 32', data: req.body})
})

module.exports = router;

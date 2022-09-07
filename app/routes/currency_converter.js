var router = require('express').Router()
var currency_converter = require('../controllers/currency_converter')

//Enrutadores de Test
router.get('/', function(req, res) {
  res.json({ message: 'Para continuar accede a /converter/data' })
})

router.get('/converter/:data?', currency_converter.getInfo)

module.exports = router
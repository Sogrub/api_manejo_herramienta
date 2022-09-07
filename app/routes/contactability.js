var router = require('express').Router()
var contactability = require('../controllers/contactability')

//Enrutadores de Contactability
router.get('/', function(req, res) {
  res.json({ message: 'Para continuar accede a /managmentDates/data' })
})

router.get('/managmentDates/:data', contactability.getInfo)

module.exports = router
var router = require('express').Router()
var chatController = require('../controllers/test')

//Enrutadores de Test
router.get('/', function(req, res) {
  res.json({ message: 'Vas a buscar una cerveza' })
})

router.get('/managmentDates', chatController.getInfo)

module.exports = router
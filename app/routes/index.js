  var router = require('express').Router()
  var test = require('./test')

  //Primer ingreso
  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  //Acceso a test
  router.use('/test', test)

  module.exports = router
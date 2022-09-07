  var router = require('express').Router()
  var contactability = require('./contactability')
  var currency_converter = require('./currency_converter')

  //First Login
  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  //Access a contactability
  router.use('/contactability', contactability)

  //Access a currency converter
  router.use('/currencyConverter', currency_converter)

  module.exports = router
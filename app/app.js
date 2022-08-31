var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser') //Llamamos a body-parse

var port = process.env.PORT || 3000  // establecemos nuestro puerto

//Establecemos el uso del body-parse
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())  

//Establecemos el primer punto de acceso
app.use('/api', require("./routes"))

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
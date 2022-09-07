axios = require('axios')
moment = require('moment')
trm = []

//Ejecucion del enrutador Currency Converter (Funciones) //Regresa la TRM del día en el que estamos
var currency_converter = {
    getInfo: async function (req, res) {
        uri = `https://api.apilayer.com/exchangerates_data/convert?`
        to = "COP"
        from = "USD"
        amount = "1"
        query = req.query
        if (query.to) {
            to = query.to
            from = query.from
            amount = query.amount
            console.log(query);
        }

        today = moment().format('YYYY-MM-DD');
        console.log(today);
        console.log(trm);
        if (trm.date == today) {
            console.log("Esta actualizado");
            return res.json(trm)
        } else {
            //Traer información de la API Exchange Rates
            await axios.get(`${uri}to=${to}&from=${from}&amount=${amount}`, {
                headers: {
                    'apikey': 'GYzqPyOlCxJPrOCALjDDzNrcvZZgFNSW'
                }
            })
                .then((response) => {
                    trm = response.data
                })
                .catch((error) => {
                    console.log(error);
                })

            console.log("Toco actualizarlo");
            return res.json(trm)
        }
    }
}


module.exports = currency_converter
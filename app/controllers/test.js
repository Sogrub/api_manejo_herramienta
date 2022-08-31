
//Ejecucion del enrutador TEST (Funciones)
var test = {
    getInfo: function (req, res) {
        body = req.body
        if (!body.dateOne) return res.status(400).send({ mensaje: "Falta dateOne" })
        if (!body.dateEnd) return res.status(400).send({ mensaje: "Falta dateEnd" })
        dateOne = new Date(new Date(body.dateOne.replace("-05:00", "-00:00")).setSeconds(0))
        dateEnd = new Date(new Date(body.dateEnd.replace("-05:00", "-00:00")).setSeconds(0))
        let min = 0
        let hora = 0
        let dateInit = dateOne

        console.log(new Date(dateInit));
        console.log(new Date(new Date(dateInit).setHours(13)));
        console.log(new Date(dateInit).getDay());
        console.log((new Date(dateInit).getDay()) == 0);
        while (dateInit <= dateEnd) {
            // console.log(dateInit);
            dateInit = new Date(dateInit.setMinutes(dateInit.getMinutes() + 1))
            if ((new Date(dateInit)) >= (new Date(new Date(dateInit).setHours(3))) && (new Date(dateInit)) < (new Date(new Date(dateInit).setHours(13)))) {
                switch ((new Date(dateInit).getDay())) {
                    case 0:
                        console.log("Es Domingo");
                        break;
                    case 6:
                        console.log("Es Sabado");
                        break;
                    default:
                        console.log("Esta entre semana");
                        min++
                        break;
                }
                // if ((new Date(dateInit).getDay()) != 0 || (new Date(dateInit).getDay()) != 6) {
                //     console.log((new Date(dateInit).getDay()) != 0 || (new Date(dateInit).getDay()) != 6);
                //     console.log(new Date(dateInit).getDay(), " - ", new Date(dateInit).getDay(), " - ", sum);
                //     sum++
                // }
            }
        }

        hora = `${Math.floor(min / 60)}/${(min % 60)}`
       
        return res.json({ mensaje: 'Estas conectado a la función manejo de Fechas', dateOne: dateOne, dateEnd: dateEnd, dateInit: dateInit, min: min, hora: hora })
    }
}

module.exports = test


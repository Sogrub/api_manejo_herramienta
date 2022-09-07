
//Ejecucion del enrutador Contactability (Funciones) //Regresa las horas hábiles que hay entre dos días
var contactability = {
    getInfo: function (req, res) {
        query = req.query
        console.log(query);
        if (!query.dateOne) return res.status(400).send({ mensaje: "Falta dateOne" })
        if (!query.dateEnd) return res.status(400).send({ mensaje: "Falta dateEnd" })
        dateOne = new Date(new Date(query.dateOne.replace("-05:00", "-00:00")).setSeconds(0))
        dateEnd = new Date(new Date(query.dateEnd.replace("-05:00", "-00:00")).setSeconds(0))
        let min = 0
        let hora = 0
        let dateInit = dateOne

        console.log(new Date(dateInit));
        console.log(new Date(new Date(dateInit).setHours(18)));
        console.log(new Date(dateInit).getDay());
        console.log((new Date(dateInit).getDay()) == 0);
        while (dateInit <= dateEnd) {
            // console.log(dateInit);
            dateInit = new Date(dateInit.setMinutes(dateInit.getMinutes() + 1))
            if ((new Date(dateInit)) >= (new Date(new Date(dateInit).setHours(8))) && (new Date(dateInit)) < (new Date(new Date(dateInit).setHours(18)))) {
                switch ((new Date(dateInit).getDay())) {
                    case 0:
                        // console.log("Es Domingo");
                        break;
                    case 6:
                        // console.log("Es Sabado");
                        break;
                    default:
                        // console.log("Esta entre semana");
                        min++
                        break;
                }
            }
        }

        hora = `${Math.floor(min / 60)}/${(min % 60)}`
       
        return res.json({ mensaje: 'Estas conectado a la función manejo de Fechas', dateOne: dateOne, dateEnd: dateEnd, dateInit: dateInit, min: min, hora: hora })
    }
}

module.exports = contactability


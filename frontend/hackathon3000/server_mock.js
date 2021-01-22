const express = require('express')
var cors = require("cors");
const app = express()
const port = 8000

const n_machines = 4
const N_event = 5
const N_day = 10
const matieres = ["APSA","Haskell", "Hackathon", "Scala", "Service", "Intersemestre"]
const lieu = ["La lune", "Zoom", "P-314", "E-272", "B02-150" ]
const today_date_8 = new Date(2018, 1, 20, 8, 0, 0)

const randomInt = (max) => Math.floor(max * Math.random());

const randomState = () => Math.random() > 0.5

const getRandomLieu = () => lieu[randomInt(lieu.length)]

const getRandomMatiere = () => matieres[randomInt(matieres.length)]

const getRandomMachineState = () => {
    return [...Array(n_machines).keys()].map( x =>  {
        return { nom:`machine_${x}`, occupe: randomState() }
    });
}

const getRandomSchedule = () => {
    const events = []

    for (i = 0; i<N_day; i++) {
        for (x = 0; x < N_event; x++) {
            const event = {
                title:getRandomMatiere(),
                start: new Date(2021, 1 + i, 20, 8 + 2*x, 0, 0),
                end: new Date(2021, 1 + i, 20, 8 + 2*x + 1, 0, 0),
                extendedProps: {
                    lieu: getRandomLieu(),
                }
            }

            events.push(event)


        }
    }

    return {events:events}
}

app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

.get('/api/machine', (req, res) => {
    res.status(200).json( getRandomMachineState() )
})

.get('/api/calendrier', (req,res) => {
    res.status(200).json( getRandomSchedule() )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

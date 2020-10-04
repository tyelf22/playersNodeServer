import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()

let players = [
    {
        id: uuidv4(),
        firstname: "Steph",
        lastname: "Curry",
        age: 32
    },
    {
        id: uuidv4(),
        firstname: "Lebron",
        lastname: "James",
        age: 38
    },
]

router.get('/', (req, res) => {
    res.send(players)
})

router.post('/', (req, res) => {
    const player = req.body

    players.push({id: uuidv4(), ...player })
    res.send(`${player.firstname} ${player.lastname} has been added to database.`)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const foundPlayer = players.find((player) => player.id === id)
    res.send(foundPlayer)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    players = players.filter((player) => player.id !== id )
    res.send(`Player with id ${id} has been deleted`)
})

router.put('/:id', (req, res) => {
    const { id } = req.params

    const player = players.find((player) => player.id === id)

    const index = players.indexOf(player)

    const keys = Object.keys(req.body)

    keys.forEach(key => {
        player[key] = req.body[key]
    })

    players[index] = player

    res.send(`Player with id ${id} has been updated`)

})

export default router
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
    res.send(player)
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const foundPlayer = players.find((player) => player.id === id)
    res.send(foundPlayer)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const foundPlayer = players.find((player) => player.id === id)

    players = players.filter((player) => player.id !== id )
    res.send(`${foundPlayer.firstname} ${foundPlayer.lastname} has been deleted.`)
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

    res.send(player)

})

export default router
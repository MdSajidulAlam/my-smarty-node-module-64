const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my server!!')

})

const users = [
    { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01888855554" },
    { id: 2, name: "Shabnor", email: "Shabnor@gmail.com", phone: "01888855554" },
    { id: 3, name: "Shucurita", email: "Shucurita@gmail.com", phone: "01888855554" },
    { id: 4, name: "Shuconda", email: "Shuconda@gmail.com", phone: "01888855554" },
    { id: 5, name: "Srabonti", email: "Srabonti@gmail.com", phone: "01888855554" },
    { id: 6, name: "Sabila", email: "Sabila@gmail.com", phone: "01888855554" },
    { id: 7, name: "Sohana", email: "Sohana@gmail.com", phone: "01888855554" },
]

app.get('/users', (req, res) => {
    //filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)

})

app.listen(port, () => {
    console.log('Listening to port', port);
})

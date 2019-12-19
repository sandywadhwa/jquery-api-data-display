const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./backend/data/films.json');

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname+'/public/views/home.html'))
app.get('/data', (req, res) => res.json(data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


var express = require('express')
var bodyParser = require('body-parser')
const { response } = require('express')
require('dotenv').config()
const crud = require('./crud')



var app = express()
const PORT = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

app.get('/', (req, res) => {
    res.status(404).send('No encontrado el endpoint')
})

app.get('/tag',crud.getUsers)
app.get('/tag/:tag_cod',crud.getUser)
app.post('/tag',crud.createUser)
app.put('/tag/:tag_cod',crud.updateUser)
app.delete('/tag/:tag_cod',crud.deleteUser)


console.log(process.env.HOST)
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})
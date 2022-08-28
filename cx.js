var express = require('express')
var bodyParser = require('body-parser')
const morgan = require("morgan");
const { response } = require('express')
const swaggerUi =require('swagger-ui-express') 
require('dotenv').config()
const crud = require('./crud')
// const YAML = require('yamljs')
const docs = require('./docs')



var app = express()
const PORT = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)
app.use(morgan("dev"));


app.get('/tag',crud.getUsers)
app.get('/tag/:tag_cod',crud.getUser)
app.post('/tag',crud.createUser)
app.put('/tag/:tag_cod',crud.updateUser)
app.delete('/tag/:tag_cod',crud.deleteUser)

app.use('/',swaggerUi.serve,swaggerUi.setup(docs));

console.log(process.env.HOST)
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})
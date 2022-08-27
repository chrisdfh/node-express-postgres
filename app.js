var express = require('express');
var app = express();
var infoCursos = require('./cursos').infoCursos;
var processx = require('process');
var PORT = processx.env.PORT || 3000;

// ROUTING
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/api/cursos', function (req, res) {
    res.send(infoCursos);
});

app.get('/api/cursos/programacion', function (req, res) {
    res.send(infoCursos.programacion);
});

app.get('/api/cursos/programacion/:lenguaje', function (req, res) {
    var lang = req.params.lenguaje;
    var resultados = infoCursos.programacion.filter(function (curso) { return curso.lenguaje.toLowerCase() == lang; });
    if (resultados.length == 0) {
        return res.status(404).send(`no consegui el curso ${lang}`);
    }
    res.send(resultados);
});

app.get('/api/cursos/programacion/:lenguaje/:nivel', function (req, res) {
    var lang = req.params.lenguaje;
    var nivel = req.params.nivel;
    var resultados = infoCursos.programacion.filter(function (curso) { return curso.lenguaje.toLowerCase() == lang && curso.nivel == nivel; });
    if (resultados.length == 0) {
        return res.status(404).send(`no consegui el curso de ${lang} con nivel ${nivel}`);
    }
    res.send(resultados);
});

app.get('/api/cursos/matematicas', function (req, res) {
    res.send(infoCursos.matematicas);
});

app.get('/api/cursos/matematicas/:tema', function (req, res) {
    var tema = req.params.tema;
    var resultados = infoCursos.matematicas.filter(function (curso) { return curso.tema.toLowerCase() == tema; });
    if (resultados.length == 0) {
        return res.status(404).send(`no consegui el tema ${tema}`);
    }
    res.send(resultados);
});

app.post('/api',(req,res)=>{
    let cuerpo =''
    
    req.on('data', data=>{
        cuerpo+=data.toString()
    });

    req.on('end',()=>{
        console.log(cuerpo)

        console.log('todo listo')
        cuerpo = JSON.parse(cuerpo)
        res.send(`Ya leí la data ${cuerpo.name}`)
    })
})


// SERVER
app.listen(PORT, function () {
    console.log(`Escuchando por http://localhost:${PORT}`);
});

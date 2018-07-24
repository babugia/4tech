const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
let vagas = require('./config/vagas.js');
const Vaga = require('./model/vaga.js')

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    return res.send('Hello World');
})

app.get('/vagas', async (req, res) => {
    try {
        return res.send(vagas);
    }catch(error) {

    }
})

app.get('/vagas/:id', async (req, res) => {
    var id = req.params.id;
    return res.send(vagas.find(vagas => vagas.id === id));
})

app.post('/vagas', async (req, res) => {
    try{
        let vagasLength = vagas.length;
        let vaga = createVaga(req.body);
        vagas.push(vaga);
        if(vagas.length > vagasLength) return res.send('Added');
        return res.status(500).send('Internal error');
    }catch(error){
        return res.status(500).send('Internal error');
    }
})

app.put('/vagas/:id', async (req, res) => {
    var id = req.params.id;

    try{

        if(!req.body){
            return res.status(403).send('Nenhuma vaga veio');
        }
        let index = await vagas.findIndex(vaga => vaga.id === id);
        if(index >= 0) { 
            Object.keys(req.body).forEach(vaga => {
                vagas[index][vaga] = req.body[vaga]
            })
            return res.send('Vaga com o id '+id+' alterada com sucesso');
        }
        return res.send('Nao foi encontrado vaga com esse id');
    }catch(error) {
        return res.status(500).send(error);
    }

})

app.delete('/vagas/:id', async (req, res) => {
    var id = req.params.id;
    try{
        let vagasLength = vagas.length;
        var vaga = vagas.find(vagas => vagas.id === id);

        var index = vagas.indexOf(vaga);
        if (index > -1) {
            vagas.splice(index, 1);
            if(vagas.length < vagasLength) return res.send('Removed');
        }
        
    }catch(error) {

    }
})

app.listen(port, () => {
    console.log('Server listening on port ' +port);
})

const createVaga = (obj) => new Vaga(
    obj.id, obj.name, obj.salary, 
    obj.area,obj.description,obj.skills, 
    obj.differentials, obj.isPcd, obj.isActive
)
const pac = require('./repositorio/pacientes');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/status', (req, res)=>{
    res.status(200).send("Api pacientes on line"); 
})

app.get('/pacientes', async (req, res)=> {
    if(res.status(200)){
        try{
            const pacientes = await pac.getAll();
            res.status(200).send(pacientes);
        }catch(err){
            res.status(500).send();
        }
    }
});

app.get('/pacientes/:pacienteId', async (req, res)=> {
    if(res.status(200)){
        try{
            const paciente = await pac.getById(req.params.pacienteId);
            if(paciente)
                res.status(200).json(pacientes);
            else
                res.status(404).send();
        }catch(err){
            res.status(500).send();
        }
    }
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

const express = require('express')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}));

const alunos = [
    { "nome": "Maria", "idade": 30 },
    { "nome": "João", "idade": 25 },
    { "nome": "Pedro", "idade": 20 }
]

app.get('/alunos', (req, res) => {
 res.send(alunos)
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});

app.post("/alunos", (req, res) => {
    
    const {nome, url} = req.body

    console.log(`Nome digitado: ${nome} URL: ${url}`)

    //res.json({"nome": nome, "url": url})
})


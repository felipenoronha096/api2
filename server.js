const express = require('express')

const app = express();

app.use(express.json());

app.get('/alunos', (req, res) => {
 res.send("lendo dados do banco...")
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});

app.post("/alunos", (req, res) => {
   res.send("Enviando dados para API") 
})


const alunos = [
{"nome":"santana", "idade": 18 },
{"nome":"pedro", "idade": 17}
]
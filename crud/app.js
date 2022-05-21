const express = require('express'); // importando o express da dependência express

const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express(); // Atribui uma função para uma constante app

const User = require('./models/User')// criando uma constante do nome User para receber o arquivo User

app.use(express.json()); // json é um objecto, preparando o app para receber os dados em formato json

// Criei uma rota do tipo get, rota raiz, dps criu uma função: 'async' >> para aguardar o processamento, recebe como parâmetro ('req' >> de requisição, 'res' >> de resposta), criu a função utilizando airfunction: '=> {}'
app.get('/', async (req, res) => {
    res.send('Página inicial - Celke');
});

// Criando uma rota do tipo 'post'
app.post('/cadastrar', async (req, res) => {
    //console.log(req.body); // req de requisição, req.body >> para mostrar o conteudo do corpo

    // await >> aguarde o processamento enquanto não for finalizar essa instrução não pode ir para proxima, .create(req.body >>> para poder cadastrar novos valores) >> 
    await User.create(req.body)
    .then(() => { // quando for a conseguir executar com sucesso, acessa o then
        return res.json({
            erro: false,
            mensagem: 'Utilizador cadastrado com sucesso!'
        })
    }).catch(() => { // .catch quando não for a conseguir executar com sucesso, acessa o catch
        return res.status(400).json({
            erro: false,
            mensagem: 'Erro: Utilizador não cadastrado com sucesso!'
        })
    });

    res.send('Página cadastrar');
});

// quero executar o projecto na porta 8080
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});
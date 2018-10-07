const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const INSERT_USUARIO = 'insert into tipo_Usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad) values (`${cpf_usr}`, `${nome}`, ${senha}, `${logradouro}`, `${numero}`, `${bairro}`, `${cep}`, `${datacad}`)';

const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_7c4a5149dcb9e6c.tipo_usuario'

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-01.cleardb.net',
  user: 'bbaa4f909970b7',
  password: 'cd18d30f',
  database: 'heroku_7c4a5149dcb9e6c'
});

connection.connect(error => {
  if (error) {
    return error;
  }
});

app.get('/', (req, res) => {
  res.send('Ola mundo');
});

app.get('/usuarios', (req, res) => {
  connection.query(SELECT_ALL_USUARIOS, (error, results) => {
    if (error) {
      return res.send(error);
    } else {
      return res.json({
        data: results
      })
    }
  })
});

app.get('/usuarios/cadastrar', (req, res) => {
  const usuario = { cpf_usr: req.query.cpf_usr, nome: req.query.nome, senha: req.query.senha, logradouro: req.query.logradouro, numero: req.query.numero, bairro: req.query.bairro, cep: req.query.cep, datacad: req.query.datacad }

  connection.query(INSERT_USUARIO, usuario, (error, results) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send('Usuario cadastrado com sucesso');
    }
  })
})

app.listen(4000, () => {
  console.log('Executando na porta 4000');
})
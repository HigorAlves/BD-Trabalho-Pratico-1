const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());


const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_7c4a5149dcb9e6c.tipo_usuario'
const INSERT_USUARIO = 'INSERT INTO tipo_Usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad) VALUES (?,?,?,?,?,?,?,?)';

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

///cadastrar?cpf_usr=034285601&nome=Higor&senha=123456&logradouro=rua&numero=12&bairro=centro&cep=35550000&datacad=07-11-2018
app.get('/usuarios/cadastrar', (req, res) => {
  const usuario = { cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad } = req.query;

  connection.query(INSERT_USUARIO, [usuario.cpf_usr, usuario.nome, usuario.senha, usuario.logradouro, usuario.numero, usuario.bairro, usuario.cep, usuario.datacad], (error, results) => {
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
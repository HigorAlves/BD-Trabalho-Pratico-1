const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

//Querys usadas para realizar as consultas
const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_7c4a5149dcb9e6c.tipo_usuario'
const INSERT_USUARIO = 'INSERT INTO tipo_Usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad) VALUES (?,?,?,?,?,?,?,?)';
const INSERT_ADMINISTRADOR = 'INSERT INTO administrador (cpf_adm, tipo_adm) VALUES (?,?)';
const SELECT_ALL_ADMINISTRADORES = 'SELECT * FROM heroku_7c4a5149dcb9e6c.administrador';
const INSERT_GRANDES_AREAS = 'INSERT INTO grandes_areas (IdGA, NomeGA,cpf_adm) VALUES (?,?,?)';
const INSERT_AGENCIA_FOMENTO = 'INSERT INTO agenciafomento (IdAgenciaFomento, NomeAgenciaFomento, DataCad) VALUES'

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

//Lista todos os Usuarios
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
//Cadastra um novo Usuario
app.get('/usuarios/cadastrar', (req, res) => {
  const usuario = { cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad } = req.query;

  connection.query(INSERT_USUARIO, [usuario.cpf_usr, usuario.nome, usuario.senha, usuario.logradouro, usuario.numero, usuario.bairro, usuario.cep, usuario.datacad], (error, results) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send('Usuario cadastrado com sucesso');
    }
  })
});

//Lista todos os Administradores
app.get('/administrador', (req, res) => {
  connection.query(SELECT_ALL_ADMINISTRADORES, (error, results) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send(results);
    }
  })
})
//Cadastra novo Administrador
app.get('/administrador/cadastrar', (req, res) => {
  const administrador = { cpf_adm, tipo_adm } = req.query;
  connection.query(INSERT_ADMINISTRADOR, [administrador.cpf_adm, administrador.tipo_adm], (error, results) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send('Administrador cadastrado com sucesso');
    }
  })
})

app.listen(3000, () => {
  console.log('Executando na porta 4000');
})
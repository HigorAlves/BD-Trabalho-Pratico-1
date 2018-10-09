const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const query = require('./querys');

const app = express();
app.use(cors());

var db_config = {
  host: 'us-cdbr-iron-east-01.cleardb.net',
  user: 'bc1c4323d0aba4',
  password: '24364cf9',
  database: 'heroku_83faec3f836c990'
};

var connection = mysql.createConnection(db_config);

connection.connect(error => {
  if (error) {
    return error;
  }
});

app.get('/', (req, res) => {
  res.send('Esta é uma API de consumação, parece que você não pode acessar ela.');
});

//Pegar todos os usuarios
app.get('/usuarios',(req,res) => {
  connection.query(query.SELECT_ALL_USUARIOS, (error, results) => {
    if(error){
      return res.send('Deu error: ' + error);
    } else {
      return res.json({
        data: results
      })
    }
  })
})
//Cadastrar um novo Usuario
app.get('/usuarios/cadastrar',(req,res) => {
  let usuario = {cpf_usr, nome, Senha, Logradouro, Numero, Bairro, Cep, Datacad,DataNasc,Cod_cidade,idTipoUsuario} = req.query;
  connection.query(query.INSERT_USUARIO, [cpf_usr, nome, Senha, Logradouro, Numero, Bairro, Cep, Datacad,DataNasc,Cod_cidade,idTipoUsuario], (error, result) => {
    if(error){
      return res.send(error);
    }else{
      return res.send(result);
    }
  })

})


app.listen(4000, () => {
  console.log('Executando na porta 4000 e Conectado ao banco De dados');
})
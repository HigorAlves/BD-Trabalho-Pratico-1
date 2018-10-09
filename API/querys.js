const INSERT_USUARIO = 'INSERT INTO heroku_83faec3f836c990.usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad,dataNasc,cod_cidade,IdTipoUsuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_83faec3f836c990.usuario';
const INSERT_TIPO_PUBLICACAO = 'INSERT INTO tipo_publicacao (NomeTpPub) VALUES (?)';

module.exports = {
  INSERT_USUARIO,
  SELECT_ALL_USUARIOS,
  INSERT_TIPO_PUBLICACAO
}
const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_7c4a5149dcb9e6c.tipo_usuario';
const SELECT_ALL_ADMINISTRADORES = 'SELECT * FROM heroku_7c4a5149dcb9e6c.administrador';

const INSERT_USUARIO = 'INSERT INTO tipo_Usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad) VALUES (?,?,?,?,?,?,?,?)';
const INSERT_ADMINISTRADOR = 'INSERT INTO administrador (cpf_adm, tipo_adm) VALUES (?,?)';
const INSERT_PESQUISADOR = 'INSERT INTO pesquisador VALUES (?,?)';
const INSERT_GRANDES_AREAS = 'INSERT INTO grandes_areas (IdGA, NomeGA,cpf_adm) VALUES (?,?,?)';
const INSERT_AGENCIA_FOMENTO = 'INSERT INTO agenciafomento (IdAgenciaFomento, NomeAgenciaFomento, DataCad) VALUES'

module.exports = {
  SELECT_ALL_USUARIOS,
  INSERT_USUARIO,
  INSERT_ADMINISTRADOR,
  SELECT_ALL_ADMINISTRADORES,
  INSERT_GRANDES_AREAS,
  INSERT_AGENCIA_FOMENTO
}
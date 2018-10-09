const INSERT_USUARIO = 'INSERT INTO usuario (cpf_usr, nome, senha, logradouro, numero, bairro, cep, datacad,dataNasc,cod_cidade,IdTipoUsuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
const SELECT_ALL_USUARIOS = 'SELECT * FROM heroku_83faec3f836c990.usuario';
const INSERT_TIPO_PUBLICACAO = 'INSERT INTO tipo_publicacao (NomeTpPub) VALUES (?)';
const INSERT_DOCUMENTO = 'INSERT INTO documento (Descricao,Caminho) VALUES (?,?)';
const INSERT_AGENCIA_FOMENTO = 'INSERT INTO agenciafomento (NomeAgenciaFomento,DataCad) VALUES (?,?)';
const INSERT_GRANDE_AREA = 'INSERT INTO grandes_areas (NomeGA) VALUES (?)';
const INSERT_AREA = 'INSERT INTO areas (NomeArea, IdGA) VALUES (?,?)'
const INSERT_SUBAREA = 'INSERT INTO subareas (NomeSub,IdArea) VALUES (?,?)';
const INSERT_ESPECIALIDADE = 'INSERT INTO especialidades (NomeEsp,IdSub) VALUES (?,?)';
const INSERT_PUBLICACAO = 'INSERT INTO publicacao (Titulo, Titulo_alternativo, DataCad, Idioma, Pais, Resumo, Palavra_chave,IdGA, IdTipoPub, IdAgenciaFomento, IdDoc, cpf_pesquisador,cpf_administrador) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
const INSERT_RECURSO_FINANCEIRO = 'INSERT INTO recursos_financeiros (IdArea,IdSub,IdGA,valor,DataCad,cpf_ProReitor) VALUES (?,?,?,?,?,?,?)'

module.exports = {
  INSERT_USUARIO,
  SELECT_ALL_USUARIOS,
  INSERT_TIPO_PUBLICACAO,
  INSERT_DOCUMENTO,
  INSERT_AGENCIA_FOMENTO,
  INSERT_GRANDE_AREA,
  INSERT_AREA,
  INSERT_SUBAREA,
  INSERT_ESPECIALIDADE,
  INSERT_PUBLICACAO,
  INSERT_RECURSO_FINANCEIRO
}
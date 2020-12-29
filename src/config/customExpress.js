// Recebo todos os módulos e dependências relacionadas ao express.
const express = require('express');
const app = express();
const cors = require('cors');
const consign = require('consign');
const rootPath = '/home/daniel/Documentos/Projetos/JavaScript/previsaoDoTempo/';

consign().include('src/app/controllers').into(app);

app.use(express.static(rootPath + '/_public'))
app.use(cors());

module.exports = app; //Exporto o express;
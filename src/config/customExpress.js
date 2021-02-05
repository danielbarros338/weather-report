// Recebo todos os módulos e dependências relacionadas ao express.
const express = require('express');
const app = express();
const cors = require('cors');
const consign = require('consign');
const path = require('path');

consign().include('src/app/controllers').into(app);

app.use(express.static(__dirname + '../../../_public'));
app.use(cors());

module.exports = app; //Exporto o express;
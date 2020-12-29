//Arquivo que cria as rotas para serem lidas pelo servidor
const rootPath = '/home/daniel/Documentos/Projetos/JavaScript/previsaoDoTempo/';
const weather = require('../api/apiWeather');

module.exports = app => {
    app.get('/', (req,res) => {
        res.sendFile(rootPath + '_public/_pages/index.html')
    })
}
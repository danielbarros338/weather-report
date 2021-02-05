//Arquivo que cria as rotas para serem lidas pelo servidor
const path = require('path');
const weather = require('../api/apiWeather');

module.exports = app => {
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname + '../../../../_public/_pages/index.html'));
    })
}
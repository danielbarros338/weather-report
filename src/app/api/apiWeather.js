const express = require('express');
const app = express();
const apiWeather = require('request');
const cors = require('cors');
const city = "90200707"
let weather;

apiWeather(`https://api.hgbrasil.com/weather?woeid=${city}?key=4106970d`, function(error, response, body){
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
    console.log('body: ', body);
    
    weather = JSON.parse(body);
})

app.use(cors());

app.use("/jsonweather", (req,res) =>{
    res.json(weather['results']);
}).listen(3003, console.log('Api on'));
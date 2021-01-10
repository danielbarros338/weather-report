const express = require('express');
const app = express();
const apiWeather = require('request');
const cors = require('cors');
const ids = ["90200707", "455827", "455821", "455819", "12511369", "455826", "455822", "455830", "12511115", "455872"];
let weather = []

callApi();
app.use(cors());

app.use("/jsonweather", (req,res) =>{
    res.send(weather);
}).listen(3003, console.log('Api on'));

function callApi(){
    for(i = 0; i < ids.length-1; i++){
        apiWeather(`https://api.hgbrasil.com/weather?key=4106970d&woeid=${ids[i]}`, function(error, response, body){
            console.log('error: ', error);
            console.log('statusCode: ', response && response.statusCode);
            console.log('body: ', body);
            
            weather.push(JSON.parse(body));
        })
    }
}
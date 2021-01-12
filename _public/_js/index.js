const city = document.querySelectorAll('.city');
const max = document.querySelectorAll('.max');
const min = document.querySelectorAll('.min');
const temp = document.querySelectorAll('.temp');
const btn = document.querySelector("#send");
const inpt = document.querySelector("#enter-city");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const minimum = document.querySelector("#minimum");
const maximum = document.querySelector("#maximum");
const wind = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const weekday = document.querySelectorAll(".weekday");
const closeBtn = document.querySelector("#close-btn");
const tab = document.querySelector("#tab");

let dataPromisse = getContent();
dataPromisse.then((value) => {
    let city;
    let data = value;        
    setData(data);

    btn.addEventListener("click", el => {
        city = getCity(inpt.value, data);
        //Adicionar informações na screen
        setScreenSearch(city);
        setBg(city['results']['description']);
    })
});

function setScreenSearch(city){
    cityName.innerHTML = city['results']['city'] + " - Brasil";
    temperature.innerHTML = city['results']['temp'] + "ºC";
    description.innerHTML = city['results']['description'];
    minimum.innerHTML = "Min: <b>" + city['results']['forecast'][0]['min'] + "</b>  ";
    maximum.innerHTML = "Max: <b>" + city['results']['forecast'][0]['max'] + "</b>";
    wind.innerHTML = "Vento: <b>" + city['results']['wind_speedy'] + "</b>";
    humidity.innerHTML = "Humidade: <b>" + city['results']['humidity'] + "</b>";
    styleScreen();
}

function setBg(desc){
    switch(desc){
        case "Tempestades": document.body.style.background = "var(--color-rain-temp)";
        tab.style.color = "#fff";
        break;
        case "Tempestades isoladas": document.body.style.background = "var(--color-rain-temp)";
        tab.style.color = "#fff";
        break;
        case "Tempo nublado": document.body.style.background = "var(--color-cloudy-temp)";
        tab.style.color = "#fff";
        break;
        case "Parcialmente nublado": document.body.style.background = "var(--color-cloudy-temp)";
        tab.style.color = "#fff";
        break;
        case "Céu aberto": document.body.style.background = "var(--color-medium-temp)";
        tab.style.color = "#444";
        break;
    }
}

function styleScreen(){
    let screen = document.querySelector("#screen").style;
    screen.height = "auto"; 
}

function getCity(city, json){
    let arrCity = city.split(",");

    if(arrCity[1].charAt(0) === " "){
        arrCity = arrCity[0] + "," + arrCity[1];
    } else {
        arrCity = arrCity[0] + ", " + arrCity[1];
    }

    for(let data of json){
        if(data['results']['city'] === arrCity){
            return data;
        }
    }
}

function setData(json){
    for(i = 0; i < json.length-1; i++){
        city[i].innerHTML = `${json[i]['results']['city']}`;
        max[i].innerHTML = `${json[i]['results']['forecast'][0]['max']}°C`;
        min[i].innerHTML = `${json[i]['results']['forecast'][0]['min']}°C`;
    }   
}


async function getContent(){ //Crio a função assíncrona 
    try{
        const responseWeather = await fetch('http://localhost:3003/jsonweather'); //chamo a api do localhost 
        return await responseWeather.json(); //converto em json e retorna o objeto de forma assincrona, gerando uma promisse
    } catch (erro) {
        console.log(erro);
    }
}
/* Essa função acima ela é uma "promisse", que o navegador vai buscar minha API servida no localhost,
para poder retornar os valores da promisse, preciso retornar o valor em formato json com a palavra chave await */
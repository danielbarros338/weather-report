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

let op = document.querySelector('#op');
document.addEventListener('click', (element) => {
    let el = element.target;
    
    if(el.classList.contains('city')){
        op.value = el.value;
    }

    if(el.classList.contains('btn')){
        let capital = {
            city: op.value
        }

        try{
            let req = new XMLHttpRequest();
            let sendData = JSON.stringify(capital);
            req.open('POST', 'http://localhost:3003/jsonweather');
            req.send(sendData);
            console.log('200')
        } catch(err) {
            console.log("Não foi enviado: " + err);
        }
    }
})

let dataPromisse = getContent();
dataPromisse.then((value) => {
    console.log(value['city'])
})
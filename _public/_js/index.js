let dataPromisse = getContent();
let data = [dataPromisse.then((value) => value)];

console.log(data)
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
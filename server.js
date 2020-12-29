//Arquivo que inicia o servidor
const app = require('./src/config/customExpress'); //Recebe as dependências do express

app.listen(3000, console.log('Server on')); // Inicia o servidor
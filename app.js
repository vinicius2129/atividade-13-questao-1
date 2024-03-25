const express = require('express');
const app = express();
const configuraServidor = require('./configuraServidor');
const rotasLivros = require('./rotasLivros');

configuraServidor(app);
rotasLivros(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
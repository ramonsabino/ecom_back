const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Importar rotas
const routes = require('./routes/routes');

// Middleware para processar JSON
app.use(express.json());

// Usar as rotas
app.use('/api', routes);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});

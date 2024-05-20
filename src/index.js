const express = require('express');
const cors = require('cors');
const app = express();

// Permitir todas as origens
app.use(cors());

// ou especificar origens permitidas
// app.use(cors({ origin: 'http://localhost:3000' }));

// Importe as rotas
const routes = require('./routes/routes');

// Use as rotas
app.use('/api', routes);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

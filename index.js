const express = require('express');
const app = express();
const PORT = 3000;
const produtoRoutes = require('./src/routes/produtoRoutes');

app.use(express.json());

app.use('/produtos', produtoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/produtos/`);
});

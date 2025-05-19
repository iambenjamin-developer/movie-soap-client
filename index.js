const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const u7dRoutes = require('./routes/u7dRoutes');

app.use(express.json());

// Esto es clave: asigna el prefijo /movies a las rutas
app.use('/movies', movieRoutes);
app.use('/api/u7d', u7dRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

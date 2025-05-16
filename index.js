const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');

app.use(express.json());

// Esto es clave: asigna el prefijo /movies a las rutas
app.use('/movies', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

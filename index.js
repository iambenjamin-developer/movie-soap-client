const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');

app.use(express.json());
app.use('/movies', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

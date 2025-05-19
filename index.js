const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/u7d', require('./routes/u7dRoutes'));
app.use('/movies', require('./routes/movieRoutes'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
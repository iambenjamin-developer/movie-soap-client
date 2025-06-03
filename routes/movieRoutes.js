const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');

router.post('/add', async (req, res) => {
    try {
        const result = await movieService.addMovie(req.body);
        console.log('***POST /add result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/all', async (req, res) => {
    try {
        const result = await movieService.getAllMovies();
        console.log('***GET /all result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await movieService.getMovieById({ id: parseInt(req.params.id) });
        console.log('***GET /:id result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/code/:code', async (req, res) => {
    try {
        const result = await movieService.getMovieByCode({ code: req.params.code });
        console.log('***GET /code/:code result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/update', async (req, res) => {
    try {
        const result = await movieService.updateMovie(req.body);
        console.log('***PUT /update result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await movieService.deleteMovie({ id: parseInt(req.params.id) });
        console.log('***DELETE /:id result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/upsert', async (req, res) => {
    try {
        const result = await movieService.upsertMovie(req.body);
        console.log('***POST /upsert result***');
        console.log(JSON.stringify(result, null, 2)); // Imprime el resultado en formato JSON
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

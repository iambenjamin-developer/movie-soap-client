const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');

// POST /movies/upsert
router.post('/upsert', async (req, res) => {
    try {
        const result = await movieService.upsertMovie(req.body);
        res.json({ success: true, response: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;

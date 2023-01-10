/*
    Route: '/api/weight'
*/

const { Router } = require('express');
const { createWeight, getWeight } = require('../controllers/weight');

const router = Router();

router.get('/', getWeight);
router.post('/', createWeight);

module.exports = router;
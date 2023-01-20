/*
    Route: '/api/weight'
*/

const { Router } = require('express');
const { createWeight, getWeightByUserId, getWeightsByUserIds } = require('../controllers/weight');
const { validateJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validateJWT, getWeightsByUserIds);
router.get('/:id', validateJWT, getWeightByUserId);
router.post('/', validateJWT, createWeight);

module.exports = router;
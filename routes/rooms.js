/*
    Route: '/api/rooms'
*/

const { Router } = require('express');
const { createRoom, getRoomById, getRoomsByUserId } = require('../controllers/rooms');
const { validateJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/:id', validateJWT, getRoomById);
router.get('/', validateJWT, getRoomsByUserId);
router.post('/', validateJWT, createRoom);

module.exports = router;
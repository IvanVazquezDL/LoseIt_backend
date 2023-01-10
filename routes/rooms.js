/*
    Route: '/api/rooms'
*/

const { Router } = require('express');
const { getRooms, createRoom } = require('../controllers/rooms');

const router = Router();

router.get('/', getRooms);
router.post('/', createRoom);

module.exports = router;
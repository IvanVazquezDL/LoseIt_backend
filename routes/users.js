/*
    Route: '/api/users'
*/

const { Router } = require('express');
const { createUsers, getUsers } = require('../controllers/users');

const router = Router();

router.get('/', getUsers);
router.post('/', createUsers);

module.exports = router;
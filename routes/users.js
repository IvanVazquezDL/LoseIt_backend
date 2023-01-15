/*
    Route: '/api/users'
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, getUsers, updateUser } = require('../controllers/users');
const { validateJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', validateJWT, getUsers);
router.post('/', createUser);
router.put('/:id', validateJWT, updateUser);

module.exports = router;
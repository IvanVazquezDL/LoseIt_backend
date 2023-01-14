const { Router } = require('express');
const { login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post(
    '/',
    [
        check('email', 'Email is mandatory').isEmail(),
        check('password', 'Password is mandatory').not().isEmpty(),
        validarCampos
    ],
    login
);
router.get(
    '/renew',
    validarJWT,
    renewToken
)

module.exports = router;
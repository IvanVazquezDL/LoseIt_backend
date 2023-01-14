const { response } = require('express');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const login = async(req, res = response) => {

    const { email, password } = req.body;
    try {

        //Verify email
        const userDb = await User.findOne({ email });

        if (!userDb) {
            return res.status(404).json({
                ok: false,
                msg: 'Email/Password not valid'
            })
        }

        //Verify password
        const validPassword = bcrypt.compareSync(password, userDb.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Not a valid password'
            });
        }

        //Generate token - jwt
        const token = await generarJWT(userDb.id);

        res.status(200).json({
            ok: true,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Unexpected Error - login'
        })
    }
}

const renewToken = async (req, res = response) => {
    const uid = req.uid;
    
    //Generate token - jwt    
    const token = await generarJWT(uid);

    // Get user by id
    const user = await User.findById(uid);

    res.json({
        ok: true,
        token,
        user
    })
}

module.exports = {
    login,
    renewToken
}
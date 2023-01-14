const { response } = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const User = require('../models/users');

const getUsers = async(req, res) => {
    const users = await User.find({}, 'username email');

    res.json({
        ok:true,
        users
    })
}

const createUsers = async (req, res = response) => {
    const {
        username,
        password,
        email
    } = req.body;

    try {
        const emailExists = await User.findOne({ email });

        if (emailExists) {
            return res.status(400).json({
                ok: false,
                msg: 'Email already in use'
            });
        }

        const user = new User(req.body);

        //Encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        // Save in database
        await user.save();

        //Generate token
        const token = await generarJWT(user.id);

        res.json({
            ok: true,
            user,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Unexpected error while creating user'
        })
    }
}

module.exports = {
    createUsers,
    getUsers
}
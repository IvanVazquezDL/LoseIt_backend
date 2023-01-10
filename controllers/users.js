const User = require('../models/users');

const getUsers = async(req, res) => {
    const users = await User.find({}, 'username email');

    res.json({
        ok:true,
        users
    })
}

const createUsers = async (req, res) => {
    const {
        username,
        email
    } = req.body;

    try {
        const user = new User(req.body);
        await user.save();

        res.json({
            ok: true,
            user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createUsers,
    getUsers
}
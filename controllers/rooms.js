const Rooms = require('../models/rooms');

const getRooms = async(req, res) => {
    const room = await Rooms.find({}, 'roomName users');

    res.json({
        ok:true,
        room
    })
}

const createRoom = async(req, res) => {
    const {
        roomName,
        users
    } = req.body

    try {
        const room = new Rooms(req.body);
        await room.save();

        res.json({
            ok: true,
            room
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRooms,
    createRoom
}
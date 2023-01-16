const Rooms = require('../models/rooms');

const getRoomById = async(req, res) => {
    const uid = req.params.id;
    const room = await Rooms.findById( uid );

    res.json({
        ok:true,
        room
    })
}

const getRoomsByUserId = async(req, res) => {
    const { userId } = req.body
    const rooms = await Rooms.find({'users.uid': userId }, 'roomName users invitedUsers');

    res.json({
        ok:true,
        rooms
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
    getRoomById,
    getRoomsByUserId,
    createRoom
}
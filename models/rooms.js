const { Schema, model } = require('mongoose');

const RoomsSchema = Schema({
    roomName: {
        type:String,
        required: true,
    },
    users: {
        type: [{
            uid: String,
            username: String,
            email: String
        }]
    },
    invitedUsers: {
        type: [{
            uid: String,
            username: String,
            email: String
        }]
    }
});

RoomsSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Rooms', RoomsSchema)
const { Schema, model } = require('mongoose');

const RoomsSchema = Schema({
    roomName: {
        type:String,
        required: true,
    },
    users: {
        type: [Schema.Types.ObjectId],
        ref: 'Users',
        required: true
    }
});

RoomsSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Rooms', RoomsSchema)
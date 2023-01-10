const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
});


UserSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('User', UserSchema)
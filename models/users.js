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
    password:{
        type: String,
        required: true
    },
    weight: {
        type:Number
    },
    height: {
        type:Number
    },
    gender: {
        type: String
    }
});


UserSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('User', UserSchema)
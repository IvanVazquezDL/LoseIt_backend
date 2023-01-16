const { Schema, model } = require('mongoose');

const WeightSchema = Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String
    },
    dateText: {
        type:String,
        required: true,
    },
    date: {
        type:Date,
        required: true
    },
    weight: {
        type: Number
    }
});

WeightSchema.index({ dateText: 1, userId: 1 }, { unique: true });

WeightSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Weight', WeightSchema)
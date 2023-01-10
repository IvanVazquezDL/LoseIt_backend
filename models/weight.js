const { Schema, model } = require('mongoose');

const WeightSchema = Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    week: {
        type:Number,
        required: true,
        unique: true
    },
    weight: {
        type: Number
    }
});

WeightSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model('Weight', WeightSchema)
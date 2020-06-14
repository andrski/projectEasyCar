// JavaScript source code
const { Schema, model } = require('mongoose');

const schema = new Schema({
    car: {
        type: String,
        required: true,
    },
    tuning: {
        type: Boolean,
        default: false,
    },
    power: {
        type: Number,
        required: true,
    },
 });

module.exports = model('Car', schema);

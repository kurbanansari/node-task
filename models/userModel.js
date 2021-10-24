const mongoose = require("mongoose");

const userModel = mongoose.model('User', new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    created_on: { type: Date, default: Date.now },
    updated_on: { type: Date, default: null },
}));

module.exports = userModel;
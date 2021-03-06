// user.model.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// users = model name (collections)
// create collections if not exis
const User1 = mongoose.model('user', userSchema);

module.exports = User1;
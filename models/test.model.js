const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    remark: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// test = model name (collections)
// create collections if not exis
// nama collections menjadi jamak yaitu tests
const TestModel = mongoose.model('test', userSchema);

module.exports = TestModel;
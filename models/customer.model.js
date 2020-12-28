const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const custSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Customer = mongoose.model('customers', custSchema);

module.exports = Customer;
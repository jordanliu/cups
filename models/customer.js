//customer model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    //Balance, CustomerID,firstName,lastName,digitalID

    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },
    digitalID: {
        type: String,
        minlength: 4,
        required: true,
        trim: true,
    },
    balance: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Customer', customerSchema);

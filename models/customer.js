//customer model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    //Balance, CustomerID,firstName,lastName,digitalID

    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    confirm: {
        type: String,
        required: true,
        trim: true,
    },
    digitalID: {
        type: String,
        trim: true,
    },
    balance: {
        type: Number,
        trim: true,
    },
});

module.exports = mongoose.model('Customer', customerSchema);

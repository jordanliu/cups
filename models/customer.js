//customer model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    //Balance, CustomerID,firstName,lastName,digitalID

    customerID: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 10,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 15,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 15,
    },
    digitalID: {
        type: String,
        minlength: 10,
        required: true,
        trim: true,
    },
    Balance: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Customer', customerSchema);

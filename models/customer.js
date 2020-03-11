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
        minlength: 5,
    },
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
    Balance: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Customer', customerSchema);

//customer model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    //orderNumber, dateOrder, timeOrder, totalCost
    orderNumber: {
        type: Number,
        required: true,
        trim: true,
    },
    dateOrder: {
        type: Date,
        default: Date.now,
        required: true,
        trim: true,
    },
    timeOrder: {
        type: Date,
        default: Date.now,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Order', orderSchema);

//customer model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    created: {
        type: Date,
        default: Date.now,
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item',
        },
    ],
    totalCost: {
        type: Number,
    },
});

module.exports = mongoose.model('Order', orderSchema);

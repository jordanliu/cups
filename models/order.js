//customer model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);

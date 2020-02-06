//Category model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    //beverage, snack, daily surprise

    beverage: {
        type: String,
        required: true,
        trim: true,
    },
    snack: {
        type: String,
        required: true,
        trim: true,
    },
    dailySurprise: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = mongoose.model('Category', categorySchema);

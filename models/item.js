//customer model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var

var itemSchema = new Schema({
    //Category, Cost, systemID, Photo, Name, stockQuantity, ASLPhoto,audioFile
    name: {
        required: true,
        trim: true,
        type: String,
    },
    cost: {
        required: true,
        trim: true,
        type: Number,
    },
    description: {
        required: true,
        trim: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
        trim: true,
    },
    photo: {
        type: String,
    },
    stockQuantity: {
        required: true,
        type: Number,
        trim: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);

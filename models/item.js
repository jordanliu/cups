//customer model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var

var itemSchema = new Schema({
    //Category, Cost, systemID, Photo, Name, stockQuantity, ASLPhoto,audioFile
    systemID: {
        unique: true,
        required: true,
        trim: true,
        type: String,
    },
    Cost: {
        required: true,
        trim: true,
        type: Number,
    },
    Category: {
        required: true,
        type: String,
        trim: true,
    },
    Photo: {
        required: true,
        type: String,
    },
    stockQuantity: {
        required: true,
        type: Number,
        trim: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);

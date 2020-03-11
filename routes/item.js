const express = require('express');
const router = express.Router();
const Item = require('../models/item');

//Retrieving all
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

//Retrieving one
router.get('/:id', getItem, (req, res) => {
    res.send(res.item);
});

//Creating one
router.post('/', async (req, res) => {
    const item = new Item({
        systemID: req.body.systemID,
        Cost: req.body.Cost,
        Category: req.body.Category,
        Photo: req.body.Photo,
        stockQuantity: req.body.stockQuantity,
    });
    try {
        const newItem = await item.save();
        res.status(201).json(newItem); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

//Updating one
router.patch('/:id', getItem, async (req, res) => {
    if (req.body.systemID != null) {
        res.item.systemID = req.body.systemID;
    }
    if (req.body.Cost != null) {
        res.item.Cost = req.body.Cost;
    }
    if (req.body.lastName != null) {
        res.item.Photo = req.body.Photo;
    }
    if (req.body.digitalID != null) {
        res.item.stockQuantity = req.body.stockQuantity;
    }

    try {
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Deleting one
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.remove();
        res.json({ message: 'Item Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getItem(req, res, next) {
    let item;
    try {
        item = await Item.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: 'Cannot find item' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.item = item;
    next();
}

module.exports = router;

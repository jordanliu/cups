const express = require('express');
const router = express.Router();
const Item = require('../models/item');

/**
 * Item.
 * @namespace item
 */

/**
 *  @name getItem
 *  @description GET /api/item/ - This is a GET request for all items
 *  @access public
 *  @memberof item
 */
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

/**
 *  @name getItembyID
 *  @description GET /api/item/:id - This is a GET request for all items by ID
 *  @access public
 *  @memberof item
 */
router.get('/:id', getItem, (req, res) => {
    res.send(res.item);
});

/**
 *  @name postItem
 *  @description POST /api/item/:id - This is a post request for items
 *  @access public
 *  @memberof item
 */
router.post('/', async (req, res) => {
    console.log(req.file);

    const item = new Item({
        name: req.body.name,
        cost: req.body.cost,
        description: req.body.description,
        category: req.body.category,
        photo: req.body.photo,
        aslPhoto: req.body.aslPhoto,
        audio: req.body.audio,
        stockQuantity: req.body.stockQuantity,
        aslMD5: req.body.aslMD5,
        audioMD5: req.body.audioMD5,
    });
    try {
        const newItem = await item.save();
        res.status(201).json(newItem); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

/**
 *  @name patchItem
 *  @description PATCH /api/item/:id - This is a patch request for items
 *  @access public
 *  @memberof item
 */
router.patch('/:id', getItem, async (req, res) => {
    if (req.body.name != null) {
        res.item.name = req.body.name;
    }
    if (req.body.description != null) {
        res.item.description = req.body.description;
    }

    if (req.body.cost != null) {
        res.item.cost = req.body.cost;
    }

    if (req.body.category != null) {
        res.item.category = req.body.category;
    }

    if (req.body.stockQuantity != null) {
        res.item.stockQuantity = req.body.stockQuantity;
    }

    try {
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 *  @name deleteItem
 *  @description DELETE /api/item/:id - This is a delete request for items
 *  @access public
 *  @memberof item
 */
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

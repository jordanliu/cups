const express = require('express');
const router = express.Router();
const Category = require('../models/category');

//Retrieving all
router.get('/', async (req, res) => {
    try {
        const category = await Category.find();
        res.json(category);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

//Retrieving one
router.get('/:id', getCategory, (req, res) => {
    res.send(res.category);
});

//Creating one
router.post('/', async (req, res) => {
    const category = new Category({
        beverage: req.body.beverage,
        snack: req.body.snack,
        dailySurprise: req.body.dailySurprise,
    });
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

//Updating one
router.patch('/:id', getCategory, async (req, res) => {
    if (req.body.beverage != null) {
        res.category.beverage = req.body.beverage;
    }
    if (req.body.snack != null) {
        res.category.snack = req.body.snack;
    }
    if (req.body.dailySurprise != null) {
        res.category.dailySurprise = req.body.dailySurprise;
    }

    try {
        const updatedCategory = await res.category.save();
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Deleting one
router.delete('/:id', getCategory, async (req, res) => {
    try {
        await res.category.remove();
        res.json({ message: 'Category Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCategory(req, res, next) {
    let category;
    try {
        category = await Category.findById(req.params.id);
        if (category == null) {
            return res.status(404).json({ message: 'Cannot find category' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.category = category;
    next();
}

module.exports = router;

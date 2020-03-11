const express = require('express');
const router = express.Router();
const Order = require('../models/order');

//Retrieving all
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

//Retrieving one
router.get('/:id', getOrder, (req, res) => {
    res.send(res.order);
});

//Creating one
router.post('/', async (req, res) => {
    const order = new Order({
        orderNumber: req.body.orderNumber,
        dateOrder: req.body.dateOrder,
        timeOrder: req.body.timeOrder,
        totalCost: req.baseUrl.totalCost,
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

//Updating one
router.patch('/:id', getOrder, async (req, res) => {
    if (req.body.orderNumber != null) {
        res.order.orderNumber = req.body.orderNumber;
    }
    if (req.body.dateOrder != null) {
        res.order.dateOrder = req.body.dateOrder;
    }
    if (req.body.timeOrder != null) {
        res.order.timeOrder = req.body.timeOrder;
    }
    if (req.body.totalCost != null) {
        res.order.totalCost = req.body.totalCost;
    }

    try {
        const updatedOrder = await res.order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Deleting one
router.delete('/:id', getOrder, async (req, res) => {
    try {
        await res.order.remove();
        res.json({ message: 'Order Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getOrder(req, res, next) {
    let order;
    try {
        order = await Order.findById(req.params.id);
        if (order == null) {
            return res.status(404).json({ message: 'Cannot find order' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.order = order;
    next();
}

module.exports = router;

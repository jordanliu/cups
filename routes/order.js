const express = require('express');
const router = express.Router();
const Order = require('../models/order');

/**
 * Order.
 * @namespace order
 */

/**
 *  @name getOrder
 *  @description /api/order/ - This is a GET request for all orders
 *  @access public
 *  @memberof order
 */
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

/**
 *  @name getOrderById
 *  @description  /api/order/:id - This is a GET request for an order by ID
 *  @access public
 *  @memberof order
 */
router.get('/:id', getOrder, (req, res) => {
    res.send(res.order);
});

/**
 *  @name postOrder
 *  @description  /api/order/ - This is a POST request for order
 *  @access public
 *  @memberof order
 */
router.post('/', async (req, res) => {
    const order = new Order({
        quantity: req.body.quantity,
        item: req.body.itemID,
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

/**
 *  @name patchOrder
 *  @description  /api/order/:id - This is a PATCH request for order by ID
 *  @access public
 *  @memberof order
 */
router.patch('/:id', getOrder, async (req, res) => {
    if (req.body.item != null) {
        res.order.item = req.body.item;
    }
    if (req.body.quantity != null) {
        res.order.quantity = req.body.quantity;
    }

    try {
        const updatedOrder = await res.order.save();
        res.json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 *  @name deleteOrder
 *  @description  /api/order/:id - This is a DELETE request for order by ID
 *  @access public
 *  @memberof order
 */
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

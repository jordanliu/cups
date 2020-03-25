const express = require('express');
const router = express.Router();
const Order = require('../models/order');
//const Item = require('../models/item');

/**
 * Order.
 * @namespace order
 */

/**
 *  @name postOrder
 *  @description  /api/order/ - This is a POST request for order
 *  @access public
 *  @memberof order
 */
router.post('/', async (req, res) => {
    const order = new Order({
        items: req.body.items,
        totalCost: req.body.totalCost,
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

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

// router.get('/', async (req, res, next) => {
//     Order.find()
//         .select('items +totalCost +created _id')
//         .populate('items', 'name')
//         .exec()
//         .then(docs => {
//             res.status(200).json({
//                 count: docs.length,
//                 orders: docs.map(doc => {
//                     return {
//                         _id: doc._id,
//                         created: docs.created,
//                         totalCost: docs.totalCost,
//                         items: doc.items,
//                         request: {
//                             type: 'GET',
//                             url: 'http://localhost:5000/api/order/' + doc._id,
//                         },
//                     };
//                 }),
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: err,
//             });
//         });
// });

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

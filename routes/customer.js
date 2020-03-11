const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//Retrieving all
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

//Retrieving one
router.get('/:id', getCustomer, (req, res) => {
    res.send(res.customer);
});

//Creating one
router.post('/', async (req, res) => {
    const customer = new Customer({
        customerID: req.body.customerID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        digitalID: req.body.digitalID,
        Balance: req.body.Balance,
    });
    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer); // 201 - Suscessfully created object
    } catch (err) {
        res.status(400).json({ message: err.message }); //user gave bad data..failed
    }
});

//Updating one
router.patch('/:id', getCustomer, async (req, res) => {
    if (req.body.customerID != null) {
        res.customer.customerID = req.body.customerID;
    }
    if (req.body.firstName != null) {
        res.customer.firstName = req.body.firstName;
    }
    if (req.body.lastName != null) {
        res.customer.lastName = req.body.lastName;
    }
    if (req.body.digitalID != null) {
        res.customer.digitalID = req.body.digitalID;
    }
    if (req.body.Balance != null) {
        res.customer.Balance = req.body.Balance;
    }

    try {
        const updatedCustomer = await res.customer.save();
        res.json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Deleting one
router.delete('/:id', getCustomer, async (req, res) => {
    try {
        await res.customer.remove();
        res.json({ message: 'Customer Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCustomer(req, res, next) {
    let customer;
    try {
        customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: 'cannot find customer' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.customer = customer;
    next();
}

module.exports = router;

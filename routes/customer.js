const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

//Retrieving all
router.get('/', (req, res) => {
    res.send('Test');
});

//Retrieving one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

//Creating one
router.post('/', (req, res) => {});

//Updating one
router.patch('/:id', (req, res) => {});

//Deleting one
router.delete('/:id', (req, res) => {});

module.exports = router;

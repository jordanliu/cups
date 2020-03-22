const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load customer model
const Customer = require('../../models/customer');

// @route POST api/customer/register
// @desc Register customer
// @access Public
router.post('/register', (req, res) => {
    //Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Customer.findOne({ email: req.body.email }).then(customer => {
        if (customer) {
            return res.status(400).json({ email: 'Email already exist' });
        } else {
            const newCustomer = new Customer({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password,
            });

            //Hash password before saving to database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newCustomer.password, salt, (err, hash) => {
                    if (err) throw err;
                    newCustomer.password = hash;
                    newCustomer
                        .save()
                        .then(customer => res.json(customer))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

//@route POST api/customer/login
//@desc Login customer and return JWT token
//access Public
router.post('/login', (req, res) => {
    //Form validation
    const { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const password = req.body.password;

    //Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            //User match
            //create JWT payload
            const payload = {
                id: customer.id,
                fname: customer.fname,
                lname: customer.lname,
            };
            //Sign token
            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 31556926 }, //1 year in seconds
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer' + token,
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({ passwordincorrect: 'Password incorrect' });
        }
    });
});

module.exports = router;
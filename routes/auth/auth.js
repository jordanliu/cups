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

/**
 * Auth.
 * @namespace auth
 */

/**
 *  @name getCustomers
 *  @description GET /api/auth/ - This is a GET request for all customers
 *  @access public
 *  @memberof auth
 */
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message }); //500 - something wrong on our [server] end
    }
});

/**
 *  @name postRegister
 *  @description POST /api/auth/register - This is a POST request for register
 *  @access public
 *  @memberof auth
 */
router.post('/register', (req, res) => {
    //Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Customer.findOne({ email: req.body.email }).then(customer => {
        if (customer) {
            return res.status(400).json({ message: 'Email already exist' });
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

/**
 *  @name postLogin
 *  @description GET /api/auth/ - This is a POST request for login
 *  @access public
 *  @memberof auth
 */
router.post('/login', (req, res) => {
    //Form validation

    const { errors, isValid } = validateLoginInput(req.body);

    //Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find by email
    Customer.findOne({ email }).then(customer => {
        //checkiing if the user exist
        if (!customer) {
            return res.status(404).json({ message: 'Email not found' });
        }

        //Check password
        bcrypt.compare(password, customer.password).then(isMatch => {
            if (isMatch) {
                //customer match
                //create JWT payload
                const payload = {
                    id: customer.id,
                    fname: customer.fname,
                    // lname: customer.lname,
                };
                //Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 31556926 }, //1 year in seconds
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer : ' + token,
                        });
                    }
                );
            } else {
                return res.status(400).json({ message: 'Password incorrect' });
            }
        });
    });
});

module.exports = router;

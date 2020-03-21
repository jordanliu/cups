const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

//Load customer model 
const customer = require("../../models/customer");

// @route POST api/customer/register 
// @desc Register customer 
// @access Public 
router.post("/register", (req, res) => {
    //Form Validation
    const {errors, isValid} = validateRegisterInput(req.body);

    //Check validation
    if (!isValid){
        return res.status(400).json(errors);
    }

    Customer.findOne({email:req.body.email}).then(customer=> {
        if (customer){
            return res.status(400).json({email: "Email already exist"});
        }else {
            const newCustomer = new Customer({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: req.body.password,
            });

            //Hash password before saving to database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newCustomer.password, salt, (err, hash) => {
                    if (err) throw err;
                    newCustomer.password =hash;
                    newCustomer
                        .save()
                        .then(customer => res.json(customer))
                        .catch(err => console.log(err));
                });
              });
        }
    });
});
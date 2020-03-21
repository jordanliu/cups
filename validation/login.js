const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data){
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.password = !isEmpty(data.password) ? data.password : "";

    //Password check
    if (Validator.isEmpty(data.password)){
        errors.password = "Password feild is required";
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};
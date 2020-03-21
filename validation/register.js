const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data){
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.fname = !isEmpty(data.fname) ? data.fname : "";
    data.lname = !isEmpty(data.lname) ? data.lname : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirm = !isEmpty(data.confirm) ? data.confirm : "";

    //First Name check
    if (Validator.isEmpty(data.fname)){
        errors.fname = "First Name is field required";
    }

    // Last Name check 
    if (Validator.isEmpty(data.lname )){
        errors.lname = "Last Name field is required";
    }

    //Email check
    if (Validator.isEmpty(data.email)){
        errors.email = "Email feild is required";    
    }else if (!Validator.isEmpty(data.email)){
        errors.email = "Email is invalid";
    }

    //Phone number check
    if (Validator.isEmpty(data.phone)){
        errors.phone = "Phone number field is required";
    }else if (!Validator.isEmpty(data.phone)){
        errors.phone = "Phone number invalid";
    }

    //Password checks
    if (Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if (Validator.isEmpty(data.confirm)){
        errors.confirm = "Confirm Password field is required";
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = "Password must be atleast 6 characters";
    }

    if (!Validator.equals(data.password, data.confirm)){
        errors.confirm = "Passwords must match";
    }

    return {
        errors, isValid : isEmpty(errors)
    };
};
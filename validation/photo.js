const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validatePhotoInput(data) {
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.photoMD5 = !isEmpty(data.photoMD5) ? data.photoMD5 : '';

    //photo md5
    if (Validator.isEmpty(data.photoMD5)) {
        errors.photoMD5 = 'photoMD5 field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

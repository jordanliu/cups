const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateAudioInput(data) {
    let errors = {};

    //Convert empty fields to an empty string so we can use validator functions
    data.audioMD5 = !isEmpty(data.audioMD5) ? data.audioMD5 : '';

    //photo md5
    if (Validator.isEmpty(data.audioMD5)) {
        errors.audioMD5 = 'audioMD5 field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

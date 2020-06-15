const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePostInput(data) {
    // start with an empty errors object
    let errors = {};

    // first check property
    data.title = validText(data.title) ? data.title : '';
    data.start = validText(data.start) ? data.start : '';
    data.destination = validText(data.destination) ? data.destination : '';
    data.time = validText(data.time) ? data.time : '';
    // data.description = validText(data.description) ? data.description : '';
    data.author = validText(data.author) ? data.author : "";

    // then do validator checks
    // title
    if (!Validator.isLength(data.title, { min: 1, max: 30 })) {
        errors.title = 'Title must be between 1 and 30 characters';
    };

    //start
    if (!Validator.isLength(data.start, { min: 1, max: 30 })) {
        errors.start = 'Start must be between 1 and 30 characters';
    };

    // destination
    if (!Validator.isLength(data.destination, { min: 1, max: 30 })) {
        errors.destination = 'Destination must be between 1 and 30 characters';
    };

    // time
    if (!Validator.isLength(data.time, { min: 1, max: 30 })) {
        errors.time = 'Time must be between 1 and 30 characters';
    };

    // // description
    // if (!Validator.isLength(data.description, { min: 1, max: 30 })) {
    //     errors.description = 'Description must be between 1 and 30 characters';
    // };

    if (!Validator.isLength(data.author, { min: 1, max: 30 })) {
        errors.author = 'Author must be between 1 and 30 characters';
    };

    // also check its not empty
    // title
    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    };

    //start
    if (Validator.isEmpty(data.start)) {
        errors.start = 'Start field is required';
    };

    // destination
    if (Validator.isEmpty(data.destination)) {
        errors.destination = 'Destination field is required';
    };

    // time
    if (Validator.isEmpty(data.time)) {
        errors.time = 'Time field is required';
    };

    // // description
    // if (Validator.isEmpty(data.description)) {
    //     errors.description = 'Description field is required';
    // };

    if (Validator.isEmpty(data.author)) {
        errors.author = 'Author field is required';
    };

    // last return errors object
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};
// REGISTER VALIDATOR FUNCTION

const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    // create errors object
    let errors = {};

    // next grab the fields off the data object
    // OR if they are not there, then add them to the object

    // data.handle = validText(data.handle) ? data.handle : '';
    data.firstName = validText(data.firstName) ? data.firstName : '';
    data.lastName = validText(data.lastName) ? data.lastName : '';
    data.email = validText(data.email) ? data.email : '';
    data.password = validText(data.password) ? data.password : '';
    data.password2 = validText(data.password2) ? data.password2 : '';

    // now validate that all the fields are what they should be

    // // validate if it is between 2 and 30 characters long
    // if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    //     errors.handle = 'Handle must be between 2 and 30 characters';
    // }

    // // next check if validator for handle is empty
    // if (Validator.isEmpty(data.handle)) {
    //     errors.handle = 'Handle field is required';
    // }

    // validate if it is between 2 and 30 characters long
    if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.firstName = 'First name must be between 2 and 30 characters';
    }

    // next check if validator for first name is empty
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name field is required';
    }

    // validate if it is between 2 and 30 characters long
    if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Last name must be between 2 and 30 characters';
    }

    // next check if validator for last name is empty
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last name field is required';
    }

    // next check if the email is empty
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }

    // next check if the email is actually an email
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // next check if the password is empty
    if (Validator.isEmpty(data.password)) {
        errors.passowrd = 'Password is required';
    }

    // next check length of the password, if between 6 and 30 characters
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be between 6 and 30 characters';
    }

    // next check if the two passwords are equal to each other
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    // return errors object
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
}
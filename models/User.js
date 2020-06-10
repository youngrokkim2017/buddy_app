const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define what it means to be a user in our app
const UserSchema = new Schema({
    // handle: {
    //     type: String,
    //     required: true,
    // },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);
// first arg is a string, what we want our model to be called
// second arg is the schema we want to pass in, to create the user model

module.exports = User;
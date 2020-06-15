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
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/,
    },
    password: {
        type: String,
        required: true,
    },
    // posts: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'post'
    // }],
    // posts: [{
    //     title: String,
    //     postedBy: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'users',
    //     }
    // }],
    date: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('users', UserSchema);
// first arg is a string, what we want our model to be called
// second arg is the schema we want to pass in, to create the user model

module.exports = User;
// Define a new schema, for post
// pass into mongoose.models
// have a model for our Post
const mongoose = require('mongoose');
// need to access the schema
const Schema = mongoose.Schema;

const pointSchema = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});

// Define what it means to be a Post in our app
const PostSchema = new Schema({
    user: {
        // similar to active record association
        type: Schema.Types.ObjectId,
        // needs a reference, the model we want to associate it with
        ref: 'users',
        // ref: 'post',
        // ref: 'posts',
    },
    // user: {
    //     id: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'users',
    //     },
    //     ame: {
    //         type: String,
    //         required: true
    //     }
    // },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    start: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    // description: {
    //     type: String,
    //     required: true,
    // },
    // author: {
    //     type: String,
    //     required: true
    // },
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'requests'
    }],
    // requests: [{
    //     text: String,
    //     postedBy: {
    //         type: Schema.Types.ObjectId,
    //         ref: 'users',
    //     }
    // }],
    // location: {
    //     type: pointSchema,
    //     required: true,
    // },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Pass into mongoose.models
const Post = mongoose.model('post', PostSchema);

module.exports = Post;
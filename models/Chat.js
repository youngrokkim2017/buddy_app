const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "users"
    // },
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        name: {
            type: String,
            required: true,
        }
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "post",
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Chat = mongoose.model('chats', ChatSchema);

module.exports = Chat;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
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
module.exports(Chat);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    members: {
        type: Array,
    },
}, {
    timestamps: true,
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
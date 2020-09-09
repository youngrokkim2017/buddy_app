const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    // content: String,
    // name: String,

    // content of the message
    content: {
        type: String,
        required: true,
    },
    // name of the user posting a message
    name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
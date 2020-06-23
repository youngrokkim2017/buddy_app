const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    userTo: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const Subscriber = mongoose.model('subscriber', SubscriberSchema);

module.exports = Subscriber;
const express = require('express');
const router = express.Router();
const Conversation = require('../../models/Conversation')

// new conversation
router.post('/', async (req, res) => {
    const newConversation = new Conversation({
        members: [
            req.body.senderId,
            req.body.receiverId,
        ]
    })

    try {
        const savedConversation = await newConversation.save();
        res.status.apply(200).json(savedConversation);
    } catch (err) {
        res.status(500).json(err)
    }
})

// get conversation of a user
router.get('/:userId', async (res, req) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        })

        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
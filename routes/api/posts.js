const express = require('express');
const router = express.Router();
const passport = require('passport');
const validatePostInput = require('../../validation/post');
const Post = require('../../models/Post');
const Chat = require('../../models/Chat');
const User = require('../../models/User');

router.get('/test', (req, res) => {
    res.json({ msg: 'This is the post route' })
});

// INDEX route GET route to get all the posts currently available
router.get('/', (req, res) => {
    // did not add passport.authenticate b/c doesn't matter which user is logged in
    // use mongoose to get the index
    Post
        .find()
        .sort({ date: -1 }) // sort by date in reverse order
        .then(p => res.json(p))
        .catch(err => res.status(400).json(err));
});

// GET look up all the posts by a give user
router.get('/user/:user_id', (req, res) => {
    // find the posts by the given id
    Post
        // search on the user field
        .find({ user: req.params.user_id })
        // then send back the post that we find
        .then(p => res.json(p))
        .catch(err => res.status(400).json(err));
});

// GET to a specific id 
router.get('/:id', (req, res) => {
    Post
        .findById(req.params.id)
        .then(p => res.json(p))
        .catch(err => res.status(400).json(err));
});

// Add POST route, allows us to create a new post on the backend
// and also want to add the user on the request using passport, import passport
router.post('/', 
    passport.authenticate('jwt', { session: false }), // add passport here for the second middleware function
    (req, res) => {
        // now the req object will have the user key
        // will be the current user based on the jwt
        
        // FIRST validate that the post will work
        const { isValid, errors } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        // NEXT create next post, if passed validations
        const newPost = new Post({
            user: req.user.id,
            title: req.body.title,
            start: req.body.start,
            destination: req.body.destination,
            time: req.body.time,
            description: req.body.description,
        });

        // THEN save the post and send the res
        newPost.save() // returns a promise
            .then(p => res.json(p));
    }
);

////////////////////////// CHAT //////////////////////////

// // add a POST route 
// // create a chat
// router.post('/:postId/chat', passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { errors, isValid } = validateChatInput(req.body);

//     if (!isValid) {
//         return res.status(400).json(errors);
//     };

//     const newChat = new Chat({
//         user: {
//             _id: req.user._id,
//             name: req.user.name,
//         },
//         post: req.params.postId,
//         message: req.body.message,
//     });

//     newChat.save()
//         .then(chat => res.json(chat))
//         .catch(err => res.status(400).json(err))
// });

// // GET chats
// router.get('/:postId/chat', passport.authenticate('jwt', { session: false }), (req, res) => {
//     Chat
//         .find({ post: req.params.postId })
//         .then(chats => res.json(chats))
// });

////////////////////////// CHAT //////////////////////////


// // GETS users for the chat
// router.get('/:postId/chat/users', passport.authenticate('jwt', { session: false }), (req, res) => {
//     let post = [];

//     post.findById(req.params.postId)
//         .then(post => {
//             // User.findById()
//         })
// });

module.exports = router;
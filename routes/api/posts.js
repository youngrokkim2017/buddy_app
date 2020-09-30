const express = require('express');
const router = express.Router();
const passport = require('passport');
const validatePostInput = require('../../validation/post');
const validateChatInput = require('../../validation/chat');
const Post = require('../../models/Post');
const Chat = require('../../models/Chat');
const User = require('../../models/User');
const Request = require('../../models/Request');

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
        .sort({ date: -1 })
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
// router.get('/:id', 
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//     Post
//         .findById(req.params.id).populate('user')
//         .then(p => res.json(p))
//         .catch(err => res.status(400).json({ nopostfound: 'No Post Found' }));
// });

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
            //
            // author: req.user.firstName,
            //
            title: req.body.title,
            start: req.body.start,
            destination: req.body.destination,
            time: req.body.time,
            // description: req.body.description,
            author: req.body.author,
        });

        // THEN save the post and send the res
        newPost.save() // returns a promise
            .then(p => res.json(p));
    }
);

// Delete a post
// router.delete('/:id',
//     (req, res) => {
//         Chat.deleteMany({ request: req.params.id }, err => {
//             // errors
//         }). then(
//             Post.findByIdAndDelete(req.params.id, 
//                 err => {
//                     if (err) res.status(422).send({ error: err });

//                     res.status.json({ message: 'Post Deleted' })
//                 }
//             )
//         )
//     }
// )
router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post
            .findById(req.params.id)
            .then(post => {
                post.remove()
                    .then(post => res.json(post))
                    .catch(err => res.status(404).json({ nopostfound: 'Invalid Request' }))
            })
            .catch(err => res.status(404).json({ nopostfound: 'No post found' }));
    }
);

// Edit a post
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        };

        Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            (err, post) => {
                if (err) return res.status(400).json(err);
                return res.json(post)
            }
        )
    }
)

//  CHAT ROUTES //

//              //


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

// ////////////////////////// CHAT //////////////////////////


// // GETS users for the chat
// router.get('/:postId/chat/users', passport.authenticate('jwt', { session: false }), (req, res) => {
//     // let post = [];
//     let request = [];

//     Post.findById(req.params.postId).then((post) => {
//     // Request.findById(req.params.requestId).then((request) => {
//         // User.findById(post.user).then((userOne) => {
//         User.findById(request.requester).then((userOne) => {
//             // post.push(userOne);
//             request.push(userOne);
            
//             Post.findById(request.post).then((post) => {
//                 User.findById(post.user).then((userTwo) => {
//                     response.push(userTwo);

//                     res.json(response);
//                 })
//             })
//         })
//     })
// });

module.exports = router;

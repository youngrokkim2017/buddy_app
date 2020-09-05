const express = require("express");
const router = express.Router();
const passport = require("passport");
const validatePostInput = require("../../validation/post");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Request = require("../../models/Request");
const Chat = require("../../models/Chat");
const validateRequestStatus = require('../../validation/requests')

// GET all requests associated with a Post
router.get('/post/:postId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Request
            .find({ post: req.params.postId })
            .then(requests => res.json(requests))
            .catch(err => res.status(400).json(err));
    }
);

// GET single request associated with a Post
router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Request
            .findById(req.params.id)
            .then(request => res.json(request))
            .catch(err => res.status(400).json(err));
    }
);

// GET look up all the requests by a given user
router.get('/user/:user_id', (req, res) => {
    // find the posts by the given id
    Request
        // search on the user field
        .find({ user: req.params.user_id })
        // then send back the post that we find
        .then(r => res.json(r))
        .catch(err => res.status(400).json(err));
});

// POST a request to a post
router.post('/post/:postId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const newRequest = new Request({
            requester: req.user._id,
            // requester: req.user.id
            post: req.params.postId,
        })

        newRequest.save()
            .then(request => res.json(request))
            .catch(err => res.status(400).json(err));
    }
);

// UPDATE request status
router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateRequestStatus(req.body)

        if (!isValid) {
            return res.status(400).json(errors)
        };

        Request.findByIdAndDelete(
            req.body._id,
            // req.body.id,
            req.body,
            { new: true },
            (err, request) => {
                if (err) return res.status(400).json(err);
                return res.json(request);
            }
        )
    }
);

// GET approved request of a user
router.get('/users/:userId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const requests = Request.find({
            requester: req.user._id,
            // requester: req.user.id,
        });

        const request = requests.filter((request) => request.status === 'approved')

        res.json(request)
    }
);

// GET all requests of a user
router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Request
            .find({ requester: req.user._id })
            .then(requests => res.json(requests))
    }
);

// Delete a request
// router.delete('/:id',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         Request
//             .findById(req.params.id)
//             .then(request => {
//                 request.remove()
//                     .then(r => res.json(r))
//                     .catch(err => res.status(404).json({ norequestfound: 'Invalid Request' }))
//             })
//             .catch(err => res.status(404).json({ norequestfound: 'No request found' }));
//     }
// );

router.delete('/:id',
    (req, res) => {
        Request.findByIdAndDelete(
        // Request.deleteMany(
            req.params.id,
            err => {
                if (err) res.status(422).send({ error: err })
                res.status(200).json({ message: 'Request Deleted' })
            }
        )
    }
)

// // FOR MAKING A CHAT
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
//     let response = [];

//     // Post.findById(req.params.postId).then((post) => {
//     Request.findById(req.params.postId).then((request) => {
//         // User.findById(post.user).then((userOne) => {
//         User.findById(request.requester).then((userOne) => {
//             // post.push(userOne);
//             response.push(userOne);

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
const express = require("express");
const router = express.Router();
const passport = require("passport");
const validatePostInput = require("../../validation/post");
const Post = require("../../models/Post");
const User = require("../../models/User");
const Request = require("../../models/Request");

// GET all requests associated with a Post
router.get('/post/:postId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Request
            .find({
                walk: req.params.postId
            })
            .then(requests => res.json(requests))
    }
);

// GET single request associated with a Post
router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Request
            .findById(req.params.id)
            .then(request => res.json(request))
    }
);

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
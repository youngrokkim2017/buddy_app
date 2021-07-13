// THIS IS THE USERS JS ROUTE
// also holds controllers

const express = require('express');
const router = express.Router(); // gets a router object
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
// import key, contaings the secret key
const keys = require('../../config/keys');
// import jwt
const jwt = require('jsonwebtoken');
const passport = require('passport');
// import validations
const validateRegisterInput = require('../../validation/register');
// import validate login
const validateLoginInput = require('../../validation/login');
const validateUpdateInput = require('../../validation/update_user');
// const { requestsReduer } = require('../../frontend/src/reducers/requests_reducer');
// const { serializeUser } = require('passport');
const Post = require('../../models/Post');

// ADD ROUTES
router.get('/test', (req, res) => {
    res.json({ msg: 'This is the user route' });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    // res.json({ msg: 'Success' });
    res.json({
        id: req.user.id,
        // handle: req.user.handle,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    });
});

// route to register user (CREATE A NEW USER)
router.post('/register', (req, res) => {
    // VALIDATION FOR REGISTER
    // first, call validateRegisterInput on req.body
    // object destructuring to grab important parts
    const { errors, isValid } = validateRegisterInput(req.body);

    // do a check
    if (!isValid) {
        // if not valid
        return res.status(400).json(errors); // sends the json object created in validations
    }

    // look up if the user already exits based on the email, grabbing it from request body
    User.findOne({ email: req.body.email })
        .then(user => {
            // if the user already exists in the database, send an error code
            if (user) {
                return res.status(400).json({ email: "A user is already registered with that email" })
            } else { // if user doesn't exist, create a new user
                const newUser = new User({
                    // handle: req.body.handle,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password, 
                });

                // use bcrypt to generate salt
                // first arg is the number of rounds done to generate salt
                // second arg is invoked when it is done and ready to continue
                bcrypt.genSalt(10, (err, salt) => {
                    // use this salt to hash the password
                    // 1st arg the thing you want to hash, newly created users passowrd
                    // 2nd arg is the salt you just got back
                    // 3rd arg to be invoked after the password has been successfully hashed (first arg is err, second is newly created password hash)
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        // if there's an err throw the err
                        if (err) throw err;
                        // reset the password for the new user
                        newUser.password = hash;

                        // AFTERWARDS can save user
                        newUser.save() // this returns a promise
                            // want to sent this back to the front end
                            // user will be a json object
                            .then((user) => res.json(user)) 
                            // else catch error
                            .catch(err => console.log(err))
                    });
                });

                // // save newUser (FOR TESTING ONLY)
                // newUser.save()
                //     .then(user => res.send(user))
                //     .catch(err => res.send(err));
            }
        });
});

// LOGIN ROUTE SETUP
// jwt authentication for a persistent login
// Check if email and user match up
router.post('/login', (req, res) => {
    // VALIDATION FOR LOGIN 
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // look up user by that email and verify if they have the correct password using bcrypt
    // to look up user using passport, use User model from mongoose
    User.findOne({ email }) // returns a promise
        .then(user => {
            // see if we found a user
            if (!user) {
                return res.status(404).json({ email: 'This user does not exist.' });
            }

            // use bcrypt to check if the client input the correct password
            // and check if password has been hashed
            // pass in the password that was provided and the actual user.password
            bcrypt.compare(password, user.password)
                .then(isMatch => {  // gets a boolean back
                    if (isMatch) {
                        // res.json({ msg: 'Success' });

                        // create json web token and send it back to the client after they login
                        // first create the paylod we want to send back
                        const payload = {
                            // contains all the user info the client might want
                            // comes from mongoDB
                            id: user.id,
                            // handle: user.handle,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                        };

                        // want to use jwt module to create the jwt
                        jwt.sign(
                            // first arg is payload
                            payload,
                            // second arg is secretOrKey
                            keys.secretOrKey,
                            // third arg is an options hash, want jwt to expire in 3600
                            { expiresIn: 3600 },
                            // fourth arg is a callback function once you hvae created the jwt
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                });
                            }
                        );
                    } else {
                        return res.status(400).json({ password: 'Incorrect password' });
                    }
                }); 
        });
});

//UDPATE current user
router.patch('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateUpdateInput(req.body);

    if (!isValid) {
        return res.status(44).json(errors);
    };

    let filter = { _id: req.user._id };

    let update = req.body;


    User.findOneAndUpdate(filter, update, { new: true })
        .then(user => {
            let returnedUser = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            };
            res.json(returnedUser);
        })
        .catch(err => res.status(404).json({ nouserfound: 'No user found' })
        );
});

// user show page
router.get('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        User.findById(req.params.id)
            .then(user => {
                let returnedUser = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }
                res.json(returnedUser)
            })
            .catch(err => res.status(404).json({ nouserfound: 'No user found' }))
    }
);

// 
router.get('/requests/:requestId', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        // User.findOneAndUpdate({ _id: req.params.requestId })
        User.findOne({ _id: req.params.requestId })
            .then(user => {
                res.json(user)
            })
    }
);

// GET the requesters on a post
router.get('/posts/:postId',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Post.findOne({ _id: req.params.postId })
            .then(post => {
                Request.find({ post: post._id })
                    .then(requests => {
                        let requester = requests.map(request => request.requester)
                        res.json(requester)
                    })
            })
    }
);

// // PUT request to follow
// router.put('/follow',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         User.findByIdAndUpdate(req.body.followId, {
//             $push: { followers: req.user._id }
//         }, {
//             new: true
//         }, (err, result) => {
//             if (err) {
//                 return res.status(422).json({ error: err })
//             } 

//             User.findByIdAndUpdate(req.user._id, {
//                 $push: { following: req.body.followId }
//             }, {
//                 new: true
//             })
//             .then(result => {
//                 res.json(result)
//             })
//             .catch(err => {
//                 return res.status(422).json({ error: err })
//             })
//         })
// })

// // PUT request to unfollow
// router.put('/unfollow',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         User.findByIdAndUpdate(req.body.followId, {
//             $pull: { followers: req.user._id }
//         }, {
//             new: true
//         }, (err, result) => {
//             if (err) {
//                 return res.status(422).json({ error: err })
//             } 

//             User.findByIdAndUpdate(req.user._id, {
//                 $pull: { following: req.body.followId }
//             }, {
//                 new: true
//             })
//             .then(result => {
//                 res.json(result)
//             })
//             .catch(err => {
//                 return res.status(422).json({ error: err })
//             })
//         })
// })

module.exports = router;
// THIS IS THE USERS JS ROUTE

const express = require('express');
const router = express.Router(); // gets a router object
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
// import key, contaings the secret key
const keys = require('../../config/keys');
// import jwt
const jwt = require('jsonwebtoken');

// ADD ROUTES
router.get('/test', (req, res) => {
    res.json({ msg: 'This is the user route' });
});

// route to register user (CREATE A NEW USER)
router.post('/register', (req, res) => {
    // look up if the user already exits based on the email, grabbing it from request body
    User.findOne({ email: req.body.email })
        .then(user => {
            // if the user already exists in the database, send an error code
            if (user) {
                return res.status(400).json({ email: "A user is already registered with that email" })
            } else { // if user doesn't exist, create a new user
                const newUser = new User({
                    handle: req.body.handle,
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
                            handle: user.handle,
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

module.exports = router;
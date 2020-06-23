// give this file to node 
// node will be the interpreter and read through the JS
// want to create a simple server using express
const express = require('express');
// create app object
const app = express();
const mongoose = require('mongoose');
// get URI
const db = require('./config/keys').mongoURI; // this gives back an object
// get user router
const users = require('./routes/api/users');
// get posts router
const posts = require('./routes/api/posts');
// get requests router
const requests = require('./routes/api/requests');
// get subscribe router
const subscribers = require('./routes/api/subscribe');
// Import user model
const User = require('./models/User');

// set up app to test using postman
const bodyParser = require('body-parser'); // tells our app what type of requests it should respond to 
const passport = require('passport');

// have mongoose connect to the URI
mongoose
    .connect(db, { useNewUrlParser: true }) // .connect returns a promise
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err)); // catch any errors

// tell app to use body parser
app.use(bodyParser.urlencoded({  // our app will respond to other apps like postman
    extended: false
}));

app.use(bodyParser.json());

// add middleware for Passport
// You can now delete our 'Hello World' route
app.use(passport.initialize());
// need to setup a configuration file for Passport
require('./config/passport')(passport);

// // app is 'listening' for get requests
// // home route
// app.get("/", (req, res) => {
//     // create new user
//     const user = new User({
//         handle: 'pat',
//         email: 'pat@email.com',
//         password: '123456'
//     });
//     // save new user
//     user.save();

//     res.send("Hello World!");
// });


// API ROUTES
// if the route matches, then use the object
app.use('/api/users', users);
// FOR OTHER ROUTES LIKE POSTS??
app.use('/api/posts', posts);
app.use('/api/requests', requests);
app.use('/api/subscribe', subscribers);


// need to tell the app object to listen on a given port
const port = process.env.PORT || 5000;

// tell the app to listen
app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
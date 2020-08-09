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

// SOCKET IO //
const server = require('http').Server(app);
const io = require('socket.io')(server);

// WEBSOCKETS // 
io
    .on('connection', (socket) => {
        socket.emit('welcome', "welcome to post namespace")

        socket.on('joinroom', (room) => {
            socket.join(room);

            return socket.emit('success', 'You have successfully joined ' + room)
        })

        socket.on('exitroom', (room) => {
            socket.leave(room);

            return socket.emit('success', 'You have successfully exited ' + room)
        })

        socket.on('sendMessage', (messageInfo) => {
            io  
                .in(`${messageInfo.room}`)
                .emit('sendMessage', messageInfo);

            const newChat = new Chat({
                user: {
                    id: messageInfo.user.id,
                    name: messageInfo.user.name,
                },
                post: messageInfo.room,
                content: messageInfo.content,
            })

            newChat.save();
        })
    })
/////////////

// AWS //
const aws = require('aws-sdk');
const S3_BUCKET = process.env.S3_BUCKET;
aws.config.region = 'us-west-1';

const port = process.env.PORT || 5000;

//

app.get('/sign-s3', (req, res) => {
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read',
    };

    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if (err) return res.end();

        const returnData = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazon.aws.com/${fileName}`
        };

        res.write(JSON.stringify(returnData));

        res.end();
    })
})
/////////

// set up app to test using postman
const bodyParser = require('body-parser'); // tells our app what type of requests it should respond to 
const passport = require('passport');
const { S3 } = require('aws-sdk');

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
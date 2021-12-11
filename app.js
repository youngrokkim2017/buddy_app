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
// // import multer library
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
// const fs = require('fs')
// const util = require('utils')
// const unlinkFile = util.promisify(fs.unlink)

// const { uploadFile } = require('./s3')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'frontend', 'build', 'index.html'))
    })
}

// MULTER //
// app.get('/images/:key', (req, res) => {
//     // console.log(req.params)
//     const key = req.params.key
//     const readStream = getFileStream(key)

//     readStream.pipe(res)
// })

// app.post('/images', upload.single('image'), async (req, res) => {
//     const file = req.file
//     // console.log(file)
//     const result = await uploadFile(file)
//     // console.log(result)

//     // could apply a filter, or resize, etc

//     await unlinkFile(file.path)
    
//     const description = req.body.description
//     res.send({imagePath: `/images/${result.Key}`})
// })

// SOCKET IO //                                              // FIRST ATTEMPT
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const io = require('socket.io')(server, {
//     pingTimeout: 60000
// });

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

        socket.on('sendLocation', (location) => {
            io
                .in(`${location.room}`)
                .emit('sendLocation', location)
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

// // SOCKET IO CONNECTION
// const io = require("socket.io")(server);
// const jwt = require("jwt-then");

// // MIDDLEWARE AUTHENTICATION
// io.use(async (socket, next) => {
//     try {
//         const token = socket.handshake.query.token;
//         const payload = await jwt.verify(token, process.env.SECRET);
//         socket.userId = payload.id;
//         next();
//     } catch (err) {}
// })

// io.on('connection', (socket) => {
//     console.log('Connected: ' + socket.userId);

//     socket.on("Disconnected: " + socket.userId);
// })
// //

////////////////////////////////////////////////////////////////////////////////
// // MESSAGE SOCKET
// const http = require('http').Server(app);
// const path = require('path');
// const io = require('socket.io')(http);

// // const uri = process.env.MONGODB_URI;
// const uri = require("./config/keys").mongoURI;
// // const port = process.env.PORT || 5000;

// // const Message = require("./Message");
// const Message = require("./models/Message");
// // const mongoose = require('mongoose');

// mongoose.connect(uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });

// app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// io.on('connection', (socket) => {

//     // Get the last 10 messages from the database.
//     Message.find().sort({ createdAt: -1 }).limit(10).exec((err, messages) => {
//         if (err) return console.error(err);

//         // Send the last messages to the user.
//         socket.emit('init', messages);
//     });

//     // Listen to connected users for a new message.
//     socket.on('message', (msg) => {
//         // Create a message with the content and the name of the user.
//         const message = new Message({
//             content: msg.content,
//             name: msg.name,
//         });

//         // Save the message to the database.
//         message.save((err) => {
//             if (err) return console.error(err);
//         });

//         // Notify all other users about a new message.
//         socket.broadcast.emit('push', msg);
//     });
// });

// // const port = process.env.PORT || 5000;

// http.listen(port, () => {
//     console.log('listening on *:' + port);
// });
////////////////////////////////////////////////////////////////////////////////

// AWS //
// const aws = require('aws-sdk');
// const S3_BUCKET = process.env.S3_BUCKET;
// aws.config.region = 'us-west-1';

// app.get('/sign-s3', (req, res) => {
//     const s3 = new aws.S3();
//     const fileName = req.query['file-name'];
//     const fileType = req.query['file-type'];
//     const s3Params = {
//         Bucket: S3_BUCKET,
//         Key: fileName,
//         Expires: 60,
//         ContentType: fileType,
//         ACL: 'public-read',
//     };

//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//         if (err) return res.end();

//         const returnData = {
//             signedRequest: data,
//             url: `https://${S3_BUCKET}.s3.amazon.aws.com/${fileName}`
//         };

//         res.write(JSON.stringify(returnData));

//         res.end();
//     })
// })
/////////

// set up app to test using postman
const bodyParser = require('body-parser'); // tells our app what type of requests it should respond to 
const passport = require('passport');

// // AWS S3 bucket
// const { S3 } = require('aws-sdk');

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
// const server = app.listen(port, () => {
server.listen(port, () => {
// app.listen(port, () => {
    console.log(`listening on port ${port}`)
});
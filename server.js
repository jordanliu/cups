const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());

const CLIENT_BUILD_PATH = path.join(__dirname, '../app/client/build');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

/** This is a description of the foo function. */
try {
    const uri = process.env.MONGODB_URI;
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });
} catch (err) {
    console.log('Error: ${err.message}');
    process.exit(1);
}

/***
 * ROUTES */

/**
 * Represents a route for authRouter.
 * @router
 * @param {function} authRouter - The name of the route.
 */
const authRouter = require('./routes/auth/auth');
router.use('/auth', authRouter);

// /**
//  * Represents a route for customerRouter.
//  * @router
//  * @param {function} customerRouter - The name of the route.
//  */
// const customerRouter = require('./routes/customer');
// router.use('/customer', customerRouter);

/**
 * Represents a route for itemRouter.
 * @router
 * @param {function} itemRouter - The name of the route.
 */
const itemRouter = require('./routes/item');
router.use('/item', itemRouter);

/**
 * Represents a route for orderRouter.
 * @router
 * @param {function} orderRouter - The name of the route.
 */
const orderRouter = require('./routes/order');
router.use('/order', orderRouter);

/**
 * Represents a route for uploadRouter.
 * @router
 * @param {function} uploadRouter - The name of the route.
 */
const uploadRouter = require('./routes/upload');
router.use('/upload', uploadRouter);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(passport.initialize()); //passport middleware
require('./config/passport')(passport); //passport config
app.use('/auth', authRouter); //hmm?

app.listen(port, () => {
    console.log(
        `Server is running on port: ${port} | http://localhost:${port}`
    );
});

app.use('/uploads', express.static('uploads'));
app.use('/docs', express.static('docs'));
app.use('/api', router);
app.use(express.static(CLIENT_BUILD_PATH));
app.get('*', function (req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

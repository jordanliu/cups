const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');

// const customer = require(".routes/api/auth");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

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

// ROUTES
//=============================================================

const authRouter = require('./routes/auth/auth');
router.use('/auth', authRouter);

const customerRouter = require('./routes/customer');
router.use('/customer', customerRouter);

const categoryRouter = require('./routes/category');
router.use('/category', categoryRouter);

const itemRouter = require('./routes/item');
router.use('/item', itemRouter);

const orderRouter = require('./routes/order');
router.use('/order', orderRouter);

const photoRouter = require('./routes/photo');
router.use('/photo', photoRouter);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use(passport.initialize()); //passport middleware
require('./config/passport')(passport); //passport config
app.use('/api/auth', authRouter); //hmm?

app.listen(port, () => {
    console.log(
        `Server is running on port: ${port} | http://localhost:${port}`
    );
});

app.use('/uploads', express.static('uploads'));
app.use('/api', router);

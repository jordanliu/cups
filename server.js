const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
});

// ROUTES
//=============================================================
const router = express.Router();

const customerRouter = require('./routes/customer');
router.use('/customer', customerRouter);

const categoryRouter = require('./routes/category');
router.use('/category', categoryRouter);

const itemRouter = require('./routes/item');
router.use('/item', itemRouter);

const orderRouter = require('./routes/order');
router.use('/order', orderRouter);

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
    console.log(
        `Server is running on port: ${port} | http://localhost:${port}`
    );
});

app.use('/api', router);

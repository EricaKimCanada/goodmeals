import config from './config.js';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import mealRouter from './routers/mealRouter.js';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();
//using json data for body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log('connected to mongodb');
}).catch((error) => {
    console.log(error.reason);
});

app.use('/api/users', userRouter);
app.use('/api/meals', mealRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sandbox');
});

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

// app.get('/', (req, res) => {
//     res.send('server ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});



// server.js

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const custRouter = require('./routes/customer.route');
const testRouter = require('./routes/test.route');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/customer', custRouter);
app.use('/tes', testRouter);

// const uri = "mongodb://localhost:27017/admin?retryWrites=true;"
const uri = "mongodb://admin:myadminpassword@localhost:27017/admin?authSource=admin&readPreference=primary&ssl=false;"

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
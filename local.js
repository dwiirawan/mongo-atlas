// server.js

const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/user', userRouter);

// const uri = "mongodb://dwi:hjlCShYHQOfrWWVb@teladancluster-shard-00-02.kflt7.mongodb.net:27017/open_db?retryWrites=true;"
const uri = "mongodb://localhost:27017/admin?retryWrites=true;"

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
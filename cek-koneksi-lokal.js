// const express = require('express');
// const foodRouter = require('./routes/FoodRoutes');
const mongoose = require('mongoose');
const mongoAtlasUri ="mongodb://localhost:27017/admin?retryWrites=true&w=majority";

// const app = express();
// app.use(express.json()); // Make sure it comes back as json

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

 //    app.use(foodRouter);
	// app.listen(3000, () => { console.log('Server is running in port 3000') });

  } catch (e) {
    console.log("could not connect");
  }
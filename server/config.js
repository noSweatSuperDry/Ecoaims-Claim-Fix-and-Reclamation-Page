//AQUIRE CONNECTION
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ecoaimsServiceApp = express();
require("dotenv").config();

//CONNECT MONGODB
ecoaimsServiceApp.use(express.json());
ecoaimsServiceApp.use(cors());
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log(err));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongdb database initiated and connected successfully");
});

const claimRouter = require('./routes/claims');
const reclamationRouter = require('./routes/reclamation');
const usersRouter = require('./routes/users');

ecoaimsServiceApp.use('/claims', claimRouter);
ecoaimsServiceApp.use('/reclamation', reclamationRouter);
ecoaimsServiceApp.use('/user', usersRouter);

//APP LISTEN
ecoaimsServiceApp.listen(3001, () => {
  console.log("Server running on port 3001");
});

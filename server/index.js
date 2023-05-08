//AQUIRE CONNECTION
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const ecoaimsServiceApp = express();
const port = process.env.PORT || 5001;

ecoaimsServiceApp.use(express.json());
ecoaimsServiceApp.use(cors());
//CONNECT MONGODB

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongdb database initiated and connected successfully");
});

const claimRouter = require("./routes/claims");
const reclamationRouter = require("./routes/reclamation");
const usersRouter = require("./routes/users");

ecoaimsServiceApp.use("/claims", claimRouter);
ecoaimsServiceApp.use("/reclamation", reclamationRouter);
ecoaimsServiceApp.use("/users", usersRouter);

/*
this will be used when we need to auto start server
const { spawn } = require('child_process');

function startApp() {
  const app = spawn('node', ['index.js']);

  app.on('exit', (code) => {
    if (code !== 0) {
      console.log('App crashed. Restarting...');
      startApp();
    }
  });
}
*/

//APP LISTEN PORT
ecoaimsServiceApp.listen(port, () => {
  console.log("Server running on port: " + port);
});

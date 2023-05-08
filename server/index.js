//AQUIRE CONNECTION
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const ecoaimsServiceApp = express();
const PORT = process.env.PORT || 5001;
const URI = process.env.CYCLIC_URL;
ecoaimsServiceApp.use(express.json());
ecoaimsServiceApp.use(cors());
//CONNECT MONGODB

const uriMongodB = process.env.MONGODB_URI;
const connectMongoDB = async () => {
  try {
    mongoose.connect(uriMongodB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Mongdb database initiated and connected successfully");
    });
  } catch (e) {
    console.log(e);
  }
};

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
connectMongoDB().then(() => {
  {
    ecoaimsServiceApp.listen(PORT, () => {
      console.log("Server running on PORT: " + PORT);
    });
  }
});

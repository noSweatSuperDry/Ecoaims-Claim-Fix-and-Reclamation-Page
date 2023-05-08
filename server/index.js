//AQUIRE CONNECTION
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const ecoaimsServiceApp = express();

ecoaimsServiceApp.use(express.json());
ecoaimsServiceApp.use(cors());
//CONNECT MONGODB
/*
const uriMongodB = process.env.MONGODB_URI;
const connectMongoDB = async () => {
  try {
    await mongoose.connect(uriMongodB, {
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
*/

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
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
/*connectMongoDB().then(() => {
  {
    const PORT = process.env.PORT || 5001;
    ecoaimsServiceApp.listen(PORT, () => {
      console.log("Server running on PORT: " + PORT);
    });
  }
});
*/
connectDB().then(() => {
  const PORT = process.env.PORT || 5001;
  ecoaimsServiceApp.listen(PORT, () => {
    console.log("listening for requests" + PORT);
  });
});

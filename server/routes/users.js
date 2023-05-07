const router = require("express").Router();
let User = require("../models/user.model");

router.route("/:username/:userPassword").get((req, res) => {
  User.find({
    username: req.params.username,
    userPassword: req.params.userPassword,
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const firstName = req.body.userCredential.firstName;
  const lastName = req.body.userCredential.lastName;
  const username = req.body.userCredential.username;
  const userPassword = req.body.userCredential.userPassword;
  const userEmail = req.body.userCredential.userEmail;

  const newUser = new User({
    firstName,
    lastName,
    username,
    userPassword,
    userEmail,
  });
  newUser
    .save()
    .then(() => res.json("User ADDED!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

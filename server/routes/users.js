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
  const username = req.body.username;
  const userPassword = req.body.userPassword;
  const userToken = req.body.userToken;
  const newUser = new User({ username, userPassword, userToken });
  newUser
    .save()
    .then(() => res.json("User ADDED!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

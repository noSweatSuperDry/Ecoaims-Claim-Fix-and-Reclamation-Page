const router = require('express').Router();
let User = require ('../models/user.model');

router.route('/').get((req, res)=>{
User.find()
.then(users => res.json(users))
.catch(err => res.statusCode(400).json('Error: '+ err));

});


router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const userPassword = req.body.userPassword;
    const newUser = new User({username, userPassword});


    newUser.save().then(()=> res.json('User ADDED!')).catch(err=> res.status(400).json("Error: "+ err));
});


module.exports = router;
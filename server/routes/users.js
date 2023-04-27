const router = require('express').Router();
let User = require ('../models/user.model');

router.route('/:id/:idsecond').get((req, res)=>{
    User.find({
        username: req.params.id,
        userPassword: req.params.idsecond
      })
.then(users => res.json(users))
.catch(err => res.status(400).json('Error: '+ err));

});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const userPassword = req.body.userPassword;
    const newUser = new User({username, userPassword});


    newUser.save().then(()=> res.json('User ADDED!')).catch(err=> res.status(400).json("Error: "+ err));
});


module.exports = router;
const router = require('express').Router();
let User = require ('../models/user');

router.route('/').get((res,req)=>{
User.find()
.then(users => res.json(users))
.catch(err => res.statusCode(400).json('Error: '+ err));

});


router.route('/add').post((req,req)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save().then(()=> req.json('User ADDED!')).catch(err=> res.status(400).json("Error: "+ err));
});


module.exports = router;
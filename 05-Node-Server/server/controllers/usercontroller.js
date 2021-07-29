const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");

/*
    ----------USER SIGNUP----------
*/
router.post('/create', (req, res) => {
    User.create({
            email: req.body.user.email,
            password: req.body.user.password
    })
    .then(
        function createSucess(user) {
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            res.json({
                user: user,
                message: 'User sucessfully created!',
                sessionToken: token
            });
        }
    )
    .catch(err => res.status(500).json({error: err}));
});

/*
    ----------LOGIN REQUEST----------
*/
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
    .then(
        function loginSucess(user) {
            if(user) {
                let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60* 60 * 24});
                res.status(200).json({
                    user: user,
                    message: 'User sucessfully logged in!',
                    sessionToken: token
                });
            }
            else {
                res.status(500).json({error: 'User does not exist.'});
            }
        }
    )
    .catch(err => res.status(500).json({error: err}));
})


module.exports = router;
const router = require('express').Router();
const User = require('../db').import('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
/*
    ----------USER SIGNUP----------
*/
router.post('/register', (req, res) => {
    console.log(req.body);
    User.create({
            username: req.body.user.username,
            passwordhash: bcrypt.hashSync(req.body.user.password, 13)
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
            username: req.body.user.username
        }
    })
    .then(
        function loginSucess(user) {
            if(user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, (err, matches) => {
                    if(matches) {
                        let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60* 60 * 24});
                        res.status(200).json({
                            user: user,
                            message: 'User sucessfully logged in!',
                            sessionToken: token
                        });
                    }
                    else {
                        res.status(502).json({error: "Login Failed"})
                    }
                })
            }
            else {
                res.status(500).json({error: 'User does not exist.'});
            }
        }
    )
    .catch(err => res.status(500).json({error: err}));
})


module.exports = router;
const router = require('express').Router(); 


router.post('/post', (req, res) => {
    let response = { message: 'This is a test' };
    res.json(response);
});

module.exports = router;

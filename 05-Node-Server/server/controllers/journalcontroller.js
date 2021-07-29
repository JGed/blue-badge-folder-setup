let express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('This is the about route');
});

module.exports = router;
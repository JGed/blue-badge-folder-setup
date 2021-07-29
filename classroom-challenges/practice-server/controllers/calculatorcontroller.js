const router = require('express').Router();

router.post('/add', (req, res) => {
    const number1 = parseFloat(req.body.num1);
    const number2 = parseFloat(req.body.num2);
    const total = number1 + number2;
    res.json({ total: total });
});

router.post('/subtract', (req, res) => {
    const number1 = parseFloat(req.body.num1);
    const number2 = parseFloat(req.body.num2);
    const total = number1 - number2;
    res.json({ total: total });
});

module.exports = router;
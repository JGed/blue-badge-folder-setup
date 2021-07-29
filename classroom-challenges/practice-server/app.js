let express = require('express');
let app = express();
let port = 3000;

app.use('/test', (req, res) => {
    let response = { message: "This is a test"};
    res.json(response);
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
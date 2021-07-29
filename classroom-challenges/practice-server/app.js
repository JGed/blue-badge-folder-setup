let express = require('express');
let app = express();
let calculator = require('./controllers/calculatorcontroller')
let port = 3000;

app.use(express.json());
app.use('/calculator', calculator);

app.listen(port, () => console.log(`App is listening on port ${port}`));
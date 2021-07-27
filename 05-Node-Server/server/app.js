let express = require('express');
let app = express();

let journal = require('./controllers/journalcontroller');

app.use('/journal', journal);
app.listen(3000, () => console.log('App is listening on port 3000'));
 const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port`);
});
// app.js

const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index.route');
const app = express();


app.set('view engine', 'ejs');

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/')); // redirect CSS fontawesome
app.use('/', index);

let port = 4500;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

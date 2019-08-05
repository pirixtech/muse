const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const index = require('./routes/index');
const tasks = require('./routes/tasks');

const app = express();
let port = process.env.PORT || 3001; // sets a relative port

// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set up static folder
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set up root route
app.use('/', index);
// api call route
app.use('/api', tasks);

//Starts our server
app.listen(port, function() {
  console.log('We have successfully connected to port: ', port);
});

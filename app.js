const express = require('express');
const pug = require('pug');
const app = express();

//pug
app.set('view engine', 'pug');

//Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));  
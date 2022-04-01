const express = require('express');
const app = express();
const bodyParser = require('body-parser')



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const question = require('./routes/question_route');
const option = require('./routes/option_route');

app.use('/api/v1',question);
app.use('/api/v1',option);


module.exports = app;
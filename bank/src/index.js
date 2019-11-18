const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger('dev'));

app.use('/ws-bank/v1', routes);

app.listen(3335);

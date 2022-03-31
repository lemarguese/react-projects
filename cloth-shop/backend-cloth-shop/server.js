const express = require('express');
const app = express();
const phone = require('./phone_config')
app.use(express.json());

app.use('/phone', phone());

app.listen(8000);

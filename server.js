const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
// const path = require('path');

dotenv.config({ path: './config/config.env' });

const app = express();

const test = require('./routes/test');

app.use(express.json());

app.use('/api/test', test);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.magenta.bold));
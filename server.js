const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
// const path = require('path');

dotenv.config({ path: './config/config.env' });

const app = express();

const test = require('./routes/test');
const spacex = require('./routes/spacex');
const github = require('./routes/github');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/test', test);
app.use('/api/spacex', spacex);
app.use('/api/github', github);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.magenta.bold));
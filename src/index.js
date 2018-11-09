const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const routes = require('./routes');

mongoose.connect = (process.env.DB_CONNECTION, { useNewUrlParser: true });

app.use(routes);

app.listen(3000, () => { 
	console.log('Server is running on port 3000.'); 
});
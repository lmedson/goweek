const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.connect = (process.env.DB_CONNECTION, { useNewUrlParser: true });

app.use(require('./routes'));

app.listen(3000, () => { 
	console.log('Server is running on port 3000.'); 
});
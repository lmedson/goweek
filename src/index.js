const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const routes = require('./routes');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });

app.use((req, res, next) => {
  req.io = io;
	return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000, () => {
  console.log('Server started on port 3000');
});

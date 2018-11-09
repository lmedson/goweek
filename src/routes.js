const express = require('express');

const routes = express.Router();

const TweetController = require('./controllers/TweetController');

routes.get('/', (req, res) => {
	const name = 'Medson';
	return res.send(`Hello world ${name}!`);
});

module.exports = routes;
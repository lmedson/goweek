const Tweet = require('../models/Tweet');

module.exports = {
  async index(req, res, next) {
    const tweets = await Tweet.find({}).sort('-createdAt');
    const nowTime = new Date();
    
    const msg = tweets.map((tweet) => { 
      let index = tweets.indexOf(tweet);

      if(tweet.createdAt.getHours() === nowTime.getHours()) {
        return tweet;
      }
      else {
        return next();
      }
    });

    req.io.emit('tweets', msg);

    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    req.io.emit('tweet', tweet);

    return res.json(tweet);
  },
};
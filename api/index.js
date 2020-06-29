const { chain } = require('@amaurymartiny/now-middleware');
const { NowRequest, NowResponse } = require('@vercel/node');

// Import a couple of Express middlewares
const cors = require('cors'); // Enable cross-origin resource sharing (CORS) with various options
const morgan = require('morgan'); // HTTP request logger
const server = require('../build/server.js'); // HTTP request logger

async function handler(req, res) {
  // This is your normal ZEIT Now function.
  res.send('Everything OK.');
}

// Chain some middlewares before calling the ZEIT Now serverless function
module.exports = chain(cors(), morgan('common'), server)(handler);
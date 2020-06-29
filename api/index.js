import { chain } from '@amaurymartiny/now-middleware';
import { NowRequest, NowResponse } from '@vercel/node';

// Import a couple of Express middlewares
import cors from 'cors'; // Enable cross-origin resource sharing (CORS) with various options
import morgan from 'morgan'; // HTTP request logger
import server from '../build/server.js'; // HTTP request logger

async function handler(_req: NowRequest, res: NowResponse): Promise<void> {
  // This is your normal ZEIT Now function.
  res.send('Everything OK.');
}

// Chain some middlewares before calling the ZEIT Now serverless function
export default chain(cors(), morgan('common'), server)(handler);
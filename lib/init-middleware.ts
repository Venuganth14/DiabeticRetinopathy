// lib/init-middleware.ts

import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initialize CORS middleware
export function initMiddleware(middleware: (req: NextApiRequest, res: NextApiResponse, next: (result?: any) => void) => void) {
  return (req: NextApiRequest, res: NextApiResponse, next: () => void) => {
    middleware(req, res, (result?: any) => {
      if (result instanceof Error) {
        return res.status(500).json({ error: 'Middleware error' });
      }
      next();
    });
  };
}

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: '*', // Adjust this to your specific origin as needed
});

export const corsMiddleware = initMiddleware(cors);

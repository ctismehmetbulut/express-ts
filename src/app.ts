import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev')); // Add this line for logging
app.use(express.json()); // Use this instead of bodyParser
app.use(express.urlencoded({ extended: true })); // Use this instead of bodyParser

app.use(
  cors({
    exposedHeaders: ['X-Error-Code'],
  }),
);

// Middleware to ignore /favicon.ico requests
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).end();
  } else {
    next();
  }
});

app.get('/', (req: Request, res: Response) => res.send('Express on Vercel'));

app.listen(3000, () => console.log('Server ready on port 3000.'));

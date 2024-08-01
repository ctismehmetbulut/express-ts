import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(
  cors({
    exposedHeaders: ['X-Error-Code'],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

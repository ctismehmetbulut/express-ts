import express from 'express';
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
app.use((req: any, res: any, next: any) => {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).end();
  } else {
    next();
  }
});

app.get('/', (req: any, res: any) => res.send('Express on Vercel'));

app.listen(3000, () => console.log('Server ready on port 3000.'));

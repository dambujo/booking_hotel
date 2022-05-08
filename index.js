import express from 'express';
import 'dotenv/config';
import v1Router from './src/v1/routes';

const app = express();
const PORT = process.env.SERVER_PORT;

app.use('/', v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

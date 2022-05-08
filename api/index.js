import express from 'express';
import 'dotenv/config';
import { database } from './src/database/db';
import v1Router from './src/v1/routes';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use('/', v1Router);

app.listen(PORT, () => {
  database();
  console.log(`API is listening on port ${PORT}`);
});

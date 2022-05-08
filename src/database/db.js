import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_DB_URL } = process.env;

export const database = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
};

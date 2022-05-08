import mongoose from 'mongoose';
import 'dotenv/config';

const { MONGO_DB_URL } = process.env;

export const database = async () => {
  // Connecting to the database
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected Sucessful to MongoDB');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

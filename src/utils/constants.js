import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 3001;
export const mongoHost = process.env.MONGODB_HOST || 'localhost';
export const mongoPort = process.env.MONGODB_PORT || 27017;

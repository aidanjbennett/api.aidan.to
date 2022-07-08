import mongoose from 'mongoose';
import { mongoHost, mongoPort } from '../utils/constants.js';

export function connectToDatabase() {
    mongoose
        .connect(`mongodb://${mongoHost}:${mongoPort}/aidan-api`)
        .then(() => console.log('Connected to Database'))
        .catch((err) => console.log(err));
}

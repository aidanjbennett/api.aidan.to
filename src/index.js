import express from 'express';
import routes from './routes/index.js';
import { port } from './utils/constants.js';

const app = new express();

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded());

// Routes
app.use('/api/', routes);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

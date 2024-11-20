import express from 'express';
import { configs } from './config/env.js';
import { connectDB } from './database/datasource.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server working');
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(configs.PORT, () => {
      console.log(`Server running on http://localhost:${configs.PORT}`);
    });
  } catch (error) {
    console.log('Failed to start the server', error);
  }
};

startServer();




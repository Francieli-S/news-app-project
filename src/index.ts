import express from 'express';

import { configs } from './config/env.js';
import { connectDB } from './config/database.js';
import router from './routes.js';

const app = express();
app.use(express.json());

app.use('/api', router);

const startServer = async () => {
  try {
    if (configs.NODE_ENV !== 'test') {
      await connectDB();
      app.listen(configs.PORT, () => {
        console.log(`Server running on http://localhost:${configs.PORT}`);
      });
    }
  } catch (error) {
    console.log('Failed to start the server', error);
  }
};

startServer();

export default app;

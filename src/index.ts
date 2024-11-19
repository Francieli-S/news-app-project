import express from 'express';
import { configs } from './config/env.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server working');
});

app.listen(configs.PORT, () => {
  console.log(`Server bbb running on http://localhost:${configs.PORT}`);
});

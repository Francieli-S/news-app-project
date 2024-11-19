import express from 'express'
import {configs} from './configs/env.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server working')
})

app.listen(configs.PORT, () => {
  console.log(`Server running on http://localhost:${configs.PORT}`);
})
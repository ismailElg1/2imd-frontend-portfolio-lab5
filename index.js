
const express = require('express');
const logger = require('./middleware/logger');
const apiV1MessagesRouter = require('./routers/api/v1/messages');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/api/v1/messages', apiV1MessagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
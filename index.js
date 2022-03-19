
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/v1/messages', (req, res) => {
    res.send('get messages');
});

app.post('/api/v1/messages', (req, res) => {
    res.send('post messages');
});

app.put('/api/v1/messages/:id', (req, res) => {
    res.send('put messages');
});

app.delete('/api/v1/messages/:id', (req, res) => {
    res.send('delete messages ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
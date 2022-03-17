const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const messages = [
    {id: 1, text: 'message1'},
    {id: 2, text: 'message2'},
    {id: 3, text: 'message3'}
];
app.get('/', (req, res) => {
    res.send("hello world!")
});

app.get('/api/v1/messages', (req, res) =>{
    res.send(messages);
})

app.post('/api/v1/messages/', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required(),

    };
    const result = Joi.validate(req.body, schema);
    console.log(result);
    
    if(!req.body.text || req.body.text.length<3){
        //400 bad request
        res.status(400).send('Text is required and should be minimum 3 characters');
        return;
    }
    const message = {
        id: messages.length + 1,
        text: req.body.text,
    }
    messages.push(message);
    res.send(message);
});
// /api/v1/messages/2
app.get('/api/v1/messages/:id', (req, res) =>{
  const message = messages.find(c => c.id === parseInt(req.params.id));
  if(!message){
      res.status(404).send('The message with the given id was not found');
  }
  else{
      res.send(message);
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});
// app.post();
// app.put();
// app.delete();
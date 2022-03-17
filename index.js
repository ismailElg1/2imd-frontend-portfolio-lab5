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

app.post('/api/v1/messages', (req, res) => {
    const { error } = validateMessage(req.body);
    if(error){
        //400 bad request
        res.status(400).send(error.details[0].message);
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
      return;  
    }
  else{
      res.send(message);
  }
})

app.put('/api/v1/messages/:id', (req, res) => {
    const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message){
        res.status(404).send('The message with the given id was not found');
        return;
    }
  
    const { error } = validateMessage(req.body);
    if(error){
        //400 bad request
        res.status(400).send(error.details[0].message);
        return;
    }

    message.text = req.body.text;
    res.send(message);
});

app.delete('/api/v1/messages/:id', (req, res) => {
    const message = messages.find(c => c.id === parseInt(req.params.id));
    if(!message){
        res.status(404).send('The message with the given id was not found');
        return;
    }
  
    const index = messages.indexOf(message);
    messages.splice(index, 1);

    res.send(message);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

function validateMessage(message){
    const schema = {
        text: Joi.string().min(3).required()
    }
    return Joi.validate(message, schema);
}
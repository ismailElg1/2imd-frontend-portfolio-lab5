const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('get messages');
});

router.post('/', (req, res) => {
    res.send('post messages');
});

router.put('/:id', (req, res) => {
    res.send('put messages');
});

router.delete('/:id', (req, res) => {
    res.send('delete messages ' + req.params.id);
});

module.exports = router;
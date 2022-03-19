const getAll = (req, res) => {
    res.send('get messages');
};

const create = (req, res) => {
    res.send('post messages');
};

const update = (req, res) => {
    res.send('post messages');
};

const remove = (req, res) => {
    res.send('delete messages ' + req.params.id);
};

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
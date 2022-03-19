const getAll = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": []
        }
    })
};
const create = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {
                "text": 'This is a message'
            }
        }
    });
};

module.exports.getAll = getAll;
module.exports.create = create;
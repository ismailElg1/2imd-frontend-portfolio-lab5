const Message = require("../../../models/Message");

const getAll = (req, res) => {
    Message.find({"user": "Bob"}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "messages": docs
                }
            });
        }
    });


};

const create = (req, res, next) => {
    let message = new Message();
    message.text = "My first message";
    message.user = "Bob";
    message.save((err, doc) => {
        if(err){
            res.json(({
                "status": "error",
                "message": "Could not save message"
            }))
        }
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "message": doc
                }
            });
        }
    });

   
};

module.exports.getAll = getAll;
module.exports.create = create;
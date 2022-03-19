const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({ 
    text: String,
    user: String,
});
const Message = mongoose.model('Message', messageSchema);

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
const create = (req, res) => {
    let message = new Message();
    message.text = "My first message";
    message.user = "Bob";
    message.save((err, doc) => {
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
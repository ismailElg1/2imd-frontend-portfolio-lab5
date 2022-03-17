const Message = require('../../../models/Message');

const getAll = (req, res) => {
    Message.find({"user": req.user._id}, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "messages": doc
                }
            });
        }
    });
}

const create =  (req, res, next) => {
    
    let message = new Message();
    message.text = req.body.text;
    message.user = req.user._id;
    message.completed = false;
    message.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this message",
            })
        }
        if(!err){
            res.json({
                "status": "success",
                "data":{
                    "message": doc
                }
            });
        }
    });

}

const update =  (req, res) => {
    let user = req.user._id;
    let messageId = req.params.id;
    Message.findOneAndUpdate({
        user: user,
        _id: messageId
    }, {
        completed: true
    }, {new: true}
    ).then(doc =>{
       res.json({
        "status": "success",
        "data": {
            message: doc
        } 
       })
    }).catch(err => {
        res.json(err);
    })
}


module.exports.getAll = getAll;
module.exports.create = create;
module.exports.update = update;

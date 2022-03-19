const Message = require("../../../models/Message");

const getAll = async(req, res) => {
    try{
        const messages = await Message.find();
        res.json( {  "status": "success",
        "message": "GETTING messages",
        "data": {
            "messages": messages
        }});
    }
    catch(err){
        res.json({"message": err})
    }
    // Message.find({"user": "Bob"}, (err, docs) => {
    //     if(!err){
    //         res.json({
    //             "status": "success",
    //             "message": "GETTING messages",
    //             "data": {
    //                 "messages": docs
    //             }
    //         });
    //     }
    // });
};

const create = (req, res, next) => {
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;

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

const specific = async (req, res) => {
  
 try{
    const message = await  Message.findById(req.params.id);
    res.json(message);
 }
 catch(err){
     res.json({"message": err});
 }
}

const update = async (req, res) => {
    try{
       const updatedPost = await Message.updateOne({_id: req.params.messageId}, {$set: {text: req.body.text}});
       res.json(updatedPost);
    }
    catch(err){
       res.json({message: err});
   }
   };
   

const rem = async (req, res) => {
 try{
    const removedMessage = await Message.remove({_id: req.params.messageId});
    res.json(removedMessage);
 }
 catch(err){
    res.json({message: err});
}
};


module.exports.getAll = getAll;
module.exports.create = create;
module.exports.specific = specific;
module.exports.rem = rem;
module.exports.update = update;


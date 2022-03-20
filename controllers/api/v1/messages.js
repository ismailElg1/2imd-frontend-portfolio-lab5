const { json } = require("express/lib/response");
const Message = require("../../../models/Message");

const getAll = async (req, res) => {
  try {
    if (req.query.user) {
      res.json({
        status: "success",
        message: "GETTING messages from " + req.query.user,
      });
    } else {
      const messages = await Message.find();
      res.json({
        status: "success",
        message: "GETTING messages",
        data: {
          messages: messages,
        },
      });
    }
  } catch (err) {
    res.json({ message: err });
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
    if (err) {
      res.json({
        status: "error",
        message: "Couldn't post the message",
      });
    }
    if (!err) {
      res.json({
        status: "success",
        data: {
          message: doc,
        },
      });
    }
  });
};

const specific = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json({
      status: "success",
      message: "GETTING message with id " + req.params.id,
      data: {
        message: message,
      },
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Couldn't get message with id " + req.params.id,
    });
  }
};

const update = async (req, res) => {
  try {
    const updatedPost = await Message.updateOne(
      { _id: req.params.messageId },
      { $set: { text: req.body.text } }
    );
    res.json({
      status: "success",
      message: "UPDATING message with id " + req.params.id,
    });
  } catch (err) {
    res.json({ message: err });
  }
};

const rem = async (req, res) => {
  try {
    const removedMessage = await Message.deleteOne({
      _id: req.params.messageId,
    });
    res.json({
      status: "success",
      message: "DELETING message with id " + req.params.id,
    });
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.specific = specific;
module.exports.rem = rem;
module.exports.update = update;

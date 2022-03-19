const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": []
        }
    })
});


router.post("/", (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": {
                "text": 'This is a message'
            }
        }
    });
});

module.exports = router;
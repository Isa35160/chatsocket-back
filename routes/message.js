var express = require('express');
var router = express.Router();
const Message = require('../models/Message');

router.post('/', (req, res) => {
    console.log(req.body);
    const message = new Message(req.body);
    message.save().then(msg => res.json(msg));
});

router.get('/', (req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => console.log(err))
    ;
});


module.exports = router;

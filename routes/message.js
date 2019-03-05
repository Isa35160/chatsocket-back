var express = require('express');
var router = express.Router();
const Message = require('../models/Message')


//Ici la route n'est pas localhost/ mais localhost/messages/ -> définie sur app.js

router.post('/', function(req, res) {
    const message = new Message(req.body);
    message.save().then(msg => res.json(msg));
});

module.exports = router;

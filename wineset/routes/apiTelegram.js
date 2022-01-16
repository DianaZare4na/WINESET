let express = require('express');
let router = express.Router();

let cTelegram = require('./../controllers/SendTelegram')
router.post('/sendTelegram',cTelegram.post);

module.exports = router;
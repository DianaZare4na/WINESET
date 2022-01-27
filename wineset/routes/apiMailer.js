let express = require('express');
let router = express.Router();

let cMailer = require('../controllers/MailController');
router.post('/sendmail', cMailer.nodemailer);

module.exports = router;
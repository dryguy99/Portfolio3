var nodemailer = require('nodemailer');
var psswrd = require('../config/setup.js');
// var recaptcha = require('express-recaptcha');

// recaptcha.init('6LcA8iYUAAAAANFAEtGIAhVZnhDnLzz8QaQSPpf3', '6LcA8iYUAAAAACnigGbjlPLqzc-hzgpajDPR7Jdt');
function sendMail(app) {
// set up emailer =====================================================
app.post('/mymail', function(req, res) {
  console.log(req.body.email + " " + req.body.name + " " + req.body.message);
  // app.post(' https://www.google.com/recaptcha/api/siteverify', '6LcA8iYUAAAAACnigGbjlPLqzc-hzgpajDPR7Jdt');
    var transporter = nodemailer.createTransport({
      service: 'AOL',
      auth: {
        user: 'timothy.dry@verizon.net',
        pass: psswrd
      }
    });

    var mailOptions = {
      from: 'timothy.dry@verizon.net',
      to: 'timothy.dry@verizon.net',
      subject: 'From my portfolio',
      text: "From: " + req.body.name + " Email: " + req.body.email + " Message: " + req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email Sent!');
      }
    });
  });
}
module.exports = sendMail;

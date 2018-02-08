// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var fs = require('fs');
// const spdy = require('spdy');

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();// get an instance of the express Router
// fix cors errors
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);
// app.get('*', (req, res) => {
//     res
//       .status(200)
//       //.json({message: 'ok'})
// })
// const options = {
//     key: fs.readFileSync(__dirname + '/http2/server.key'),
//     cert:  fs.readFileSync(__dirname + '/http2/server.crt')
// }

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    //console.log('Something is happening.');
    next();
});

app.use(express.static(__dirname + '/public'));
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));

// Routes =============================================================


app.use('/', router);
require('./routes/sendMail.js')(app);
// spdy
//   .createServer(options, app)
//   .listen(port, (error) => {
//     if (error) {
//       console.error(error)
//       return process.exit(1)
//     } else {
//       console.log('Listening on port: ' + port + '.')
//     }
//   });
//Starting our express app
app.listen(port, function() {
	 console.log("App listening on PORT " + port);
});

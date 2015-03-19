var express = require('express');
var bodyParser = require('body-parser');

var fs = require("fs");
var junk = require('junk');

var path = require("path");

// var app = express();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ioClient = require('socket.io-client');
var util = require('util');




var SAVE_PATH = "views/";

var SAVE_DIR = "saved_images/";


// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('views')); //assign static folder

// app.use(express.static('saved_images')); //assign static folder


// app.use(express.bodyParser());

// app.get('/saveimage', function (req, res) {
//   res.send('Hello World!')
//   saveImage();
// })


// Receive post request
app.post('/saveimage', function(request,response) {

	// console.log("node received: " + request.body.imgData);
	console.log("node received image");

	// console.log(util.inspect(req, false, null));
  	var buffer = new Buffer(request.body.imgData, 'base64');
  	fs.writeFile(SAVE_PATH + SAVE_DIR + 'image_' + Date.now() + '.jpg', buffer);

  	// response.send("server received: " + request.body.imgData);
  	response.send("server received image!");

});


// Create web server
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});



// Read Directory 
function listAllImages() {
  var fileArray;

  fileArray = fs.readdirSync(SAVE_PATH + SAVE_DIR);
  fileArray = fileArray.filter(junk.not);
  
  // Add web path to array
  for (var i=0;i<fileArray.length;i++) {
    fileArray[i] = "/" + SAVE_DIR + fileArray[i];  
  }

  //console.log(fileArray);
  return(fileArray);
}



// Socket Stuff
io.listen(server);


io.on('connection', function(socket){
  console.log('A client connected. Send current imag elist');

  socket.emit('fullList', listAllImages().toString() );
  // console.log( listAllImages().toString() );

});


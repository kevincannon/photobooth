var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var fs = require("fs")

var util = require('util');

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('views')); //assign static folder
// app.use(express.bodyParser());

// app.get('/saveimage', function (req, res) {
//   res.send('Hello World!')
//   saveImage();
// })

// Write image file
app.post('/saveimage', function(request,response) {

	console.log("node received: " + request.body.imgData);

	// console.log(util.inspect(req, false, null));
  	var buffer = new Buffer(request.body.imgData, 'base64');
  	fs.writeFile('image.png', buffer);

  	response.send("server received: " + request.body.imgData);

});



var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
var express = require('express')
var app = express()
var http = require('http').Server(app);

app.get('/service', function(req, res){
	// oh, mais tu es curieux !?
	
	// si req.query.type == iso
		// renvoyer du json :new Date().toISOString() 
	// si ...
		// renvoyer
	// sinon renvoyer une erreur
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


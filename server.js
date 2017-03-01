var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.listen(port, function() {
	console.log("Server is listening on port " + port);
})

//Top Played Songs Ever
//https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=marcopete5&api_key=ab41ce939f8aa63bb22d6d6e483ed761&format=json

//Top Played Songs of Week
//https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=marcopete5&api_key=https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=marcopete5&api_key=ab41ce939f8aa63bb22d6d6e483ed761&format=json&format=json
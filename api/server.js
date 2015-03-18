var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function(req, res){
    res.json([
        {
            username: 'dale',
            body: 'This is a test'
        }
    ])
});

app.post('/api/posts', function(req, res){
	console.log('post recieved');
	console.log(req.body.username);
	console.log(req.body.body);
	res.sendStatus(201);
});

app.listen(3000, function(){
   console.log('Server listening on', 3000);
});
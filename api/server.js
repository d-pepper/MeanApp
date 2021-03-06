var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var Post = require('./models/post');

app.post('/api/posts', function(req, res, next){

    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });

    post.save(function (err, post){
        console.log(post)
        if(err) { return next(err) }
        res.json(201, post)
    });

    //res.status(201).json({post: post});
    //console.log(post);

});

app.get('/api/posts', function(req, res){
    res.json([
        {
            username: 'dale',
            body: 'Node rocks!'
        }
    ])
});

app.listen(3000, function(){
   console.log('Server listening on', 3000);
});

//curl -v -H "Content-Type: application/json" -XPOST --data "{\"username\":\"dale\", \"body\":\"test test\"}" localhost:3000/api/posts

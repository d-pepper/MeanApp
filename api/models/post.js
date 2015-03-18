var db = require('../db');

var Post = db.model('Post', {
	username: { type: String, required: true },
	body: { type: String, required: true },
	past: { type: Date, required: true, default: Date.now }
});

module.export = Post;
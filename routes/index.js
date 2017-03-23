var codesPostaux = require('codes-postaux');


exports.get = function(req, res){
		res.render('index',{test:"Details"}, function(err, html){
			res.send(html);
	});
}


exports.post = function(req, res){
		var pc = codesPostaux.find(req.body.pc)
		res.render('index',{test: pc[0].nomCommune}, function(err, html){
			res.send(html);
	});
}
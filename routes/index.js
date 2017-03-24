var codesPostaux = require('codes-postaux');

var messageConseilReponse = "Entrez le sous format 75001, prenez en compte l'arrondissement";

exports.get = function(req, res){
		res.render('index',{messageConseil: messageConseilReponse, retourCP:""}, function(err, html){
			res.send(html);
	});
}


exports.post = function(req, res){
		var cp = codesPostaux.find(req.body.cp)
		if(!cp[0]){
			res.render('index',{messageConseil: messageConseilReponse, retourCP: "CP incorrect"}, function(err, html){
				res.send(html);
			});
			
		}else{
			res.render('index',{messageConseil: messageConseilReponse,retourCP: cp[0].nomCommune}, function(err, html){
				res.send(html);
			});
		}
		
		
}
var codesPostaux = require('codes-postaux');

var messageConseilReponse = "Entrez un code postal sous format 75000, prenez en compte l'arrondissement";

exports.get = function(req, res){
		res.render('index',{messageConseil: messageConseilReponse, retourCP:""}, function(err, html){
			res.send(html);
	});
}


exports.post = function(req, res){
		var cp = codesPostaux.find(req.body.cp)
		if(!cp[0]){
			res.render('index',{messageConseil: messageConseilReponse, retourCP: "Vous n'avez pas correctement tapper le code postal"}, function(err, html){
				res.send(html);
			});
			
		}else{
			res.render('index',{messageConseil: messageConseilReponse,retourCP: cp[0].nomCommune}, function(err, html){
				res.send(html);
			});
		}
		
		
}
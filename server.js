var express = require('express')
var bodyParser = require('body-parser')
var Postcode = require('postcode');
var codesPostaux = require('codes-postaux');

codesPostaux.find(75001);


/************************************************
*	app + redis
************************************************/
var app = express();
app
	.set('view engine', 'ejs')
	.set('views',__dirname + '/views')
	.use(express.static(__dirname + '/public'))
	.use(bodyParser.urlencoded({ extended: false })).use(bodyParser.json())
	
var routes = { index : require('./routes/index')}
app.get('/', routes.index.get); app.post('/', routes.index.post);
app.get('/index', routes.index.get); app.post('/index', routes.index.post);

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})

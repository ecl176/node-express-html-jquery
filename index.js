/*
 * @Author: eclipse
 * @Date:   2017-03-11 13:04:53
 * @Last Modified by:   eclipse
 * @Last Modified time: 2017-03-11 17:42:29
 */

'use strict';
var express = require('express');
var app = express();
// 设置视图引擎
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', './views')


app.use(express.static(__dirname + '/public'));


///中间件
app.use(require('body-parser').urlencoded({
	extended: true
}));



app.get('/', function(req, res) {
	res.render('home');
});

app.get('/ajax', function(req, res) {
	res.render('ajax');
});
app.post('/ajax', function(req, res) {

	console.log('server accept:' +
		req.body.name, req.body.id);

	var data = {
		name: req.body.name,
		id: req.body.name
	};
	res.send(data);
	res.end();
});
// app.get('/ajax', function(req, res) {
// 	console.log('server accept:', req.query.name, req.query.id);

// 	res.header("Access-Control-Allow-Origin", '*');
// 	var data = '{' + 'name:' + req.query.name + ',id:' + req.query.id + '}';
// 	var callback = req.query.callback;
// 	var jsonp = callback + '(' + data + ')';
// 	console.log(jsonp);
// 	res.send(jsonp);
// 	res.end();
// });
app.listen(8000, function() {
	console.log('server id ready');
})
var express = require('express');
var exphandlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', exphandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/:name', function (req, res) {
    res.render(req.params.name);
});

app.listen(3000);
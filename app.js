var express = require('express');
var exphandlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', exphandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/anggota', function (req, res) {
    res.render('anggota');
})

app.get('/anggota/:name', function (req, res) {
    if (req.params.name == 'arya') {
        var templateData = {
            name: "Arya Wiranata",
            nrp: "05111540000163"
        }
    } else if(req.params.name == 'ichsan'){
        var templateData = {
            name: "Ichsan Sandi Darmawan",
            nrp: "05111540000167"
        }
    } else if (req.params.name == 'adam'){
        var templateData = {
            name: "Moh. Adam Alfian",
            nrp: "05111540007005"
        }
    }
    res.render('data', templateData);
})

app.listen(3000, function (req, res) {
    console.log("App start at port 3000");
});
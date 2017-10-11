let express = require('express');
let app = express();
const port = 8080;

app.use('/', express.static(__dirname + '/dist'));
console.log("Serveur lancé. app écoute le port " + port);

app.listen(port);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !')
    //res.send(404, 'Page introuvable !');
});
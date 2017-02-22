const express = require("express");
const app = express();
const favicon = require('serve-favicon');


app.set('port', (process.env.PORT || 3000));

// app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  return res.render('index', {title: 'Home'});
});

app.get('/partners', (req, res) => {
  return res.render('partners', {title: 'Partners'});
});

app.get('/careers', (req, res) => {
  return res.render('careers', {title: 'Careers'});
});

app.listen(app.get('port'), function() {
  console.log('Server is running on port', app.get('port'));
});

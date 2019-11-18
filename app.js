const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './public/templates/views');
const partialsPath = path.join(__dirname, './public/templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/names', (req, res) => {
  res.render('viewNames.hbs');
});

app.listen(3000);

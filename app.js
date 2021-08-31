const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

// app.get('/', (req, res) => {
//   res.render('index', { index });
// });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beer', async (req, res) => {
  const beer = await punkAPI.getBeers();
  res.render('beer', { beers });
});

app.get('/random-beer', async (req, res) => {
  const randomBeer = await punkAPI.getRandom();
  res.render('random-beer', { randomBeer });
});

//Modern way to consume promises - Async JS!
app.get('/beers', async (req, res) => {
  const beers = await punkAPI.getBeers();
  res.render('beers', { beers });
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));

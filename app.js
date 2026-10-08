const express = require('express');

// express app
const app = express();

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// register view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact-me', (req, res) => {
  res.render('contact-me');
});

app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(3000, () => {
  console.log('Listening on port: 3000');
});

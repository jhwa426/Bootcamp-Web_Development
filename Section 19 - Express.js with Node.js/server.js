//jshint esversion:6
// npm init
// npm install express
// npm -g nodemon -- reload autometically 
// nodemon server.js

const express = require('express');
const app = express();
const port = 3000;

// default
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// contact
app.get('/contact', (req, res) => {
  res.send('<br>Contact me at : jeffhwa411@gmail.com');
});


// about
app.get('/about', (req, res) => {
  res.send("<br><em>G'day! I am Jeff!<em>");
});

// hobbies
app.get('/hobbies', (req, res) => {
  res.send("<br><em>G'day! I love football!<em>");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) =>{
    res.render('home.ejs')
})

app.get('/rand', (req,res) => {
    const num = Math.floor(Math.random()*10)+1;
    res.render('random', {num})
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})
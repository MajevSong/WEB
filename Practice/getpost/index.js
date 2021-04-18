const express = require('express');
const { readdirSync } = require('fs');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); 
const methodOverride = require('method-override');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(methodOverride('_method'));
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())


let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id:uuid(),
        username: 'Moco',
        comment: 'merhaba'
    },
    {
        id:uuid(),
        username: 'hako',
        comment: 'merhab madsa'
    }
]

app.get('/comments', (req,res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new', (req,res)=>{
    res.render('comments/new')
})

app.post('/comments', (req,res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()}) 
    // redirect -> yönlendirme için kullanılır
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

app.patch('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.get('/tacos', (req,res)=>{
    res.send("get")
})

app.post('/tacos', (req,res)=> {
    const {ad, passw} = req.body;
    res.send(`OK, here you are ${ad} ${passw} tacos`)
})

app.listen(3000, (req,res)=> {
    console.log("ON PORT 3000")
})



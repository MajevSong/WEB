const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
// app.use((req, res) => {
//     console.log("WE GOT NEW REQUEST!")
//     res.send('<h1> <b>This is the home page</b> <h1>')
// })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    console.log("WE GOT NEW REQUEST!")
    res.send('<h1> <b>This is the home page</b> <h1>')
})

app.get('/r/:subreddit', (req,res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data){
        res.render('subreddit', {...data});
    }else{
        // notfound dosyasını belirtiyoruz. notfound.ejs
        res.render('notfound', {subreddit});
    }
})

app.get('/r/:subreddit/:postId', (req,res)=>{
    const {subreddit, postId} = req.params;
    res.send(`<h1> Viewing PostId: ${postId} subreddit: ${subreddit} subreddit`)
})

// sayfaya bir şeyler kaydetmek için
// app.post('/cats', (req, res) =>{
//     res.send("POST REQUEST TO /cats!!")
// })

app.get('/cats', (req, res) =>{
     const cats = [
         'Blue','Rocket','Monty', 'Stephanie', 'Winston'
     ]
     res.render('cats', { cats })
    
})

app.get('/dogs', (req, res) =>{
    res.send('WOOF!')
})

app.get('/search', (req,res)=> {
    const { q } = req.query;
    if(!q){
        res.send('Nothing found if nothing searched!')
    }
    res.send(`<h1> Search results for:${q}</h1>`)
})

app.get('*', (req, res) =>{
    res.send(`I don't know this path.`)
})

app.listen(8080, () => {
    console.log("Listening on port 8080...");
}); 
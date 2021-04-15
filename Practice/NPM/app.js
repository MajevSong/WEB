// var giveMeAJoke = require('give-me-a-joke');
// var colors = require('colors');

// giveMeAJoke.getRandomDadJoke(function(joke){
//     console.log(joke.rainbow)
// })

// console.log('hello'.red)

// const figlet = require("figlet");

// figlet('Merhaba Dünya!', function(err, data){
//     if(err){
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data.green)
// })

const franc = require("franc");
const langs = require("langs");

const langCode = franc('merhaba nasılsınız');

const language = langs.where("3",langCode);
console.log(language.name);
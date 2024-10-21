var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create', async function(req, res) {
  const user = await userModel.create({
  username:"Harshvardhan",
  nickname:"shashiiii",
  description:"I am a good boy of 34YO, into oration and standups",
  categories:['standup','speeches','anchoring'],
  })
  res.send(user)
});

/* QUESTION 1*/
//incasesensitive search-> look for RegExp in BlackBox fo rmore info and ^$'.* etc

router.get('/caseinsensitivesearch',async function(req, res) {
const regexp = new RegExp('^hArsh$','i') 

//'i' flag indicates case-insesitive,  ^ and $ are start and end of string respectively. |||ly g flag is used for finding all the occurance and not stop after first instance

  const user = await userModel.find({username: regexp})
  res.send(user)
});

/* QUESTION 2*/




module.exports = router;

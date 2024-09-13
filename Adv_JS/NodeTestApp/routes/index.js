var express = require('express');
var router = express.Router();
const userModel = require("./users");
const { default: mongoose } = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/create',async function(req,res){
  const user = await userModel.create({
    // order of fields doesnt matter
    userName: "Cruz Jr",
    age: 19,
    email: "example@gmail.com"
  })
  res.send(user)
  
})

router.get('/allusers', async function(req, res) {
  const allusers = await userModel.find() //gives all users as array of all users
  res.send(allusers)

});

router.get('/finduser', async function(req, res) {
  const allusers = await userModel.findOne({age:19}) //gives all users as array of all users
  res.send(allusers)

});

router.get('/deleteuser', async function(req, res) {
  const deletedUser = await userModel.findOneAndDelete({userName:"Cruz",age:20}) //can put in multiple criteria to find that perticular user
  res.send(deletedUser)
  console.log(deletedUser) //will return null as no such cruz with age 20 is a user
  
});
//update is not this simple yet
// router.get('/updateuser', async function(req, res) {
//   const updatedUser = await userModel.findOneAndUpdate({userName:"Cruz Jr"},{age:20})
// })

router.get('/session',function(req,res){
  // session gets deleted when server restarts
  req.session.koibhinaam = "koibhivalueeeeeeeeee";
  res.send("HELLO")
  console.log(req.session.koibhinaam)
  
})
router.get('/sessioncheck',function(req,res){
  
  res.send("session created,chk console")
  console.log(req.session.koibhinaam)
})

router.get('/removesession',function(req,res){
  req.session.destroy(function(err){
    if (err) throw err
  res.send("Session deleted")
    
  })
})

module.exports = router;

const express = require('express');
const app = express();


app.set("view engine","ejs") //setting up to use .ejs file
app.use(express.static('./public'))

app.use((req,res,next)=>{

    console.log(`Server Started!\nMiddleware Working~`)
    next()
})


app.get('/',function (req,res,next) {
    // res.render("index");
    throw Error("Something Went Wrong!!");
    
})

app.get('/error',function (req,res,next) {
    res.render(`error`,{error:"ERROR 404"}); //Adding variables on the ejs page
})

app.get('/about/:username',function (req,res,next) {
    res.send(`Hello from ${req.params.username}`);
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })


app.listen(3000)
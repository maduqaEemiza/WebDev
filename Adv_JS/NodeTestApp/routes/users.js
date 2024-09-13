// install mongoDB
// install mongoosejs -> npm i mongoose
// setup mongoose connection 
// create schema
// create model and export it 

const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/DBname')

const userSchema = mongoose.Schema({
  userName: String,
  email: String,
  age: Number

})

module.exports= mongoose.model("User",userSchema)



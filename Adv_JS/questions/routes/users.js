const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/questionsdb")

const user = mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  },
  date: {
    type: Date, 
    default: Date.now
  }

})

module.exports = mongoose.model("user",user)
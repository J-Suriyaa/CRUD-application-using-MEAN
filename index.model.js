const mongoose = require('mongoose')
const Schema = mongoose.Schema
newSchema = new Schema({
    name:String,
    email:String,
    address:String,
    position:String,
})
module.exports = mongoose.model('User', newSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema(
    {
        name:{type:String,required:true},
        phone:{type:Number,required:true},
        email:{type:String,required:true},
        Company:{type:String,required:true},
        Title:{type:String,required:true},
        Group:{type:String,required:true},
        avatar:{type:String,required:true},
    },{
        timestamps:true
    }
)

module.exports = mongoose.model('Contact',ContactSchema)
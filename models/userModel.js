// const { name } = require('ejs')
// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
// })

// module.exports= mongoose.model('user',userSchema)


const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String,
    },

    createAt:{
         type:Date,
         default:Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)

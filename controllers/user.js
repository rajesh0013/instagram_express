// const User = require('./')
// const User = require('./models/userModel')
const User = require('../models/userModel')

const userRegister = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.create({email,password})
        res.render('success.ejs')
        console.log( email ,password , user)
        
    } 
    catch (error) {
          res.send('<h1>Error Occured</h1>')
        
    }
}

module.exports = userRegister;
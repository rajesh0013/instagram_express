// atlas id password (rajeshpanwar359  rVWqzwunz2UVEzYU)

const express = require('express')
const app = express();
const PORT =3000
const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://rajeshpanwar359:rVWqzwunz2UVEzYU@cluster0.to4hb.mongodb.net/"
    ,
    {
        "dbName":"NodeJS_Express_Api_Series"
    }
).then(()=>console.log("mongodb connected successfully"))
.catch((error)=>console.log(error))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.use(express.urlencoded({extended:true}))
 
const userController = require('./controllers/user')

app.post('/',userController)

app.listen(PORT,()=>{
    console.log(`server is started on port no. ${PORT}`)
})
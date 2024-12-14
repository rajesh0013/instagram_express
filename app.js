const express =require('express')
const app = express();

const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://rajesh310panwar:yfLBw98xrQJbOiio@newcluster.nei7r.mongodb.net/?retryWrites=true&w=majority&appName=newCluster')

const User =require('./models/userModel')
app.listen(4500,()=>{
    console.log('server is running on 4500 fff')
})


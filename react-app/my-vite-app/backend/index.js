var express = require('express')
var path = require('path')
var app = express()
var mongodb = require('mongoose')
var User = require('./models/users')
app.use(express.json())

const PORT = 4001

mongodb.connect("mongodb://localhost:27017/Kex").then(()=>{
    console.log("db connection successful")
}).catch(()=>{
    console.log("error in connection string")
})

app.get('/',(req,res)=>{
    res.get("welcome to HAJS")
})

app.get('/page',(req,res)=>{
    // res.sendFile("/home/jayaanth/Documents/code/sem 5 placement training/js/index.html")
    console.log("html page is displayed")
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post('/login',(req,res)=>{
    var {email,password}=req.body
    try{
        var existingUser = User.findOne({email:email})
        if(existingUser){
            console.log("user not exist")
            res.send("no user found")
        }
        else{
            if(existingUser.password != password){
                console.log("user not exist")
                res.send("no user found")
            }
            else{
                console.log("user exist")
                res.send("succesful")
            }
        }

    }
    catch(err){
        console.log("failed")
    }
})

app.post('/signup',(req,res)=>{
    // var {firstName,lastName,email}=req.body
    console.log("BD")
    try{
        // var newUser = new User({
        //     firstName:firstName,
        //     lastName:lastName,
        //     email:email
        // })
        var newUser = new User(req.body)
        newUser.save()
        res.status(200).send("user added")

    }
    catch(err){
        console.log(err)
    }

})

app.get('/getsignup',async(req,res)=>{
    try{
        var allSignRec = await User.find()
        res.json(allSignRec)
        console.log(allSignRec)
    }
    catch(err){
        console.log(err)
    }
})

app.listen(PORT,()=>{
    console.log(`conneted to backend\nsuccessfully..!!\nUrl: http://localhost:${PORT}`)
})
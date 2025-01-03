var express = require('express')
var app = express()
const PORT = 4001

app.get('/',(req,res)=>{
    res.get("welcome to HAJS")
})

app.listen(PORT,()=>{
    console.log(`conneted to backend\nsuccessfully..!!\nUrl: http://localhost:${PORT}`)
})
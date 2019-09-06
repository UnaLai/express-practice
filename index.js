//安裝
const express = require('express')
//啟用
const app = express()

app.use('/users',(req,res,next)=>{
  console.log("It is users")
  res.send('<h1>Hello from users!</h1>')
})

app.use('/',(req,res,next)=>{
  console.log("It is homepage")
  res.send('<h1>Hello from homepage!</h1>')
})

app.listen(3000)
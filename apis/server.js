const express = require('express')
const mongoose =  require('mongoose')
const app = express()
const bodyParser = require('body-parser')

const users = require('./routers/api/users')
const menu = require('./routers/api/menu')

// bodyParser中间件
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI


// 链接数据库

mongoose.connect(db)
    .then(()=>{
        console.log("MongoDB connect")
    })
    .catch(err=>{
        console.log(err)
    })

// 路由

app.get('/',(req,res)=>{
    res.send('hello world !')
})

app.use("/api/users",users)
app.use("/api/menu",menu)

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
//請求使用express 建立 localhost server
const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')

app.get('/', (req,res)=>{
  //res.send (`successed express web app `)
  res.render('index')
})

app.engine ('handlebars', exphbs({defaultLayout:"main"}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))   //靜態檔案 使用 bootstrap

app.listen(port,()=>{
  console.log(`express is running on http://localhost:${port}`)
})

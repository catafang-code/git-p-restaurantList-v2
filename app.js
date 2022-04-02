//請求使用express 建立 localhost server
const express = require('express')
const port = 3000
const app = express()
const exphbs = require('express-handlebars')
const restaurantList = require ('./restaurants.json') //載入json


app.get('/', (req,res)=>{
  // const restaurantOne ={
  //     "id": 1,
  //     "name": "Sababa 沙巴巴中東美食",
  //     "name_en": "Sababa Pita Bar",
  //     "category": "中東料理",
  //     "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
  //     "location": "台北市羅斯福路三段 283 巷 17 號",
  //     "phone": "02 2363 8009",
  //     "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
  //     "rating": 4.1,
  //     "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。"
  // }
  res.render('index', {restaurants:restaurantList.results})  //讀取與渲染 Json資料)
})

//rout for show page by using param
app.get('/restaurants/:restaurant_id', (req,res)=>{
  //console.log('req.params.restaurant_id',req.params.restaurant_id)
  const restaurant = restaurantList.results.find(restaurant=>restaurant.id.toString()===req.params.restaurant_id)
  res.render('show', {restaurant:restaurant})
})

app.engine ('handlebars', exphbs({defaultLayout:"main"}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))   //靜態檔案 使用 bootstrap

app.listen(port,()=>{
  console.log(`express is running on http://localhost:${port}`)
})

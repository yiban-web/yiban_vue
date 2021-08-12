const express = require('express')
const bodyparser = require('body-parser')

const app = express()
const port = 3000
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址

    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");

    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    next();

});
app.post('/post', function (req, res) {

    res.send({
        data:"post请求连接成功"
    })

})

app.get('/get', (req, res) => {

    res.send({
        data:"get请求连接成功"
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
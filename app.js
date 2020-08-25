const express = require('express') //매번 새폴더에 작업을 할때마다 설치를 해줘야한다
const fs = require('fs')
const db = require('./db.js')
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); 

app.use(express.static('public')) //public 폴더를 서버에 제공하는 방법: 정적인 파일제공
// app.listen(port, () => console.log(`http://localhost:${port}`))
//public폴더에 넣은 파일을 제공

app.get('/',(req,res)=>{
    db.query(`SELECT * FROM menuData WHERE category = ${req.query.menuId===undefined? 0 : parseInt(req.query.menuId)}`, (err, rows)=>{
        res.render('index', {
                                rows:rows
                                //category:rows[0].query.category
                            })
    })
})

app.post(('/addOrder'), (req, res)=> {
    console.log(req.body.data)
    for(let i = 0; i<req.body.data.length; i++){
        console.log(req.body.data[i])
    }
    // db.query(`INSERT INTO orderData (prodName, category, price, count, prodId) VALUES('${req.body.data.name}',${req.query.category},${req.query.price}, 1, ${req.query.prodId}) ON DUPLICATE KEY UPDATE count = count + 1`, (err,rows)=>{
    //     res.sendStatus('200')
    // })
})

app.get('/allclear', (req,res)=>{
    db.query(`DELETE FROM orderData`,(err,rows)=>{
        res.sendStatus('200')
    })
})

app.get('/countupdateone',(req,res)=>{
    db.query(`UPDATE orderData SET count = ${req.query.count} WHERE prodID = ${req.query.prodId}`, (err,rows)=>{
        res.sendStatus('200')
    })
})

app.get('/countupdatemultiple',(req,res)=>{
    db.query(`UPDATE orderData SET count = ${req.query.count} WHERE prodID = ${req.query.prodId}`, (err,rows)=>{
        res.sendStatus('200')
    })
})


app.get('/delete', (req,res)=>{
    db.query(`DELETE FROM orderData where prodId = ${req.query.prodId}`, (err,rows)=>{
        res.sendStatus('200')
    })
})


app.listen(port, function () {
    console.log('@@@')
})
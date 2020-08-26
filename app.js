const express = require('express') //매번 새폴더에 작업을 할때마다 설치를 해줘야한다
const fs = require('fs')
const db = require('./db.js')
const app = express()
const port = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public')) //public 폴더를 서버에 제공하는 방법: 정적인 파일제공
// app.listen(port, () => console.log(`http://localhost:${port}`))
//public폴더에 넣은 파일을 제공

// app.get('/',(req,res)=>{
//     console.log(req.query.menuId)
//     db.query(`SELECT * FROM menuData WHERE category = 0`, (err, rows)=>{
//         res.send(rows)
//     })
// })

app.post(('/order'), (req, res)=> {
    const bodyData = JSON.parse(req.body.data) //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
    // for(let i = 0; i< bodyData.length; i++){
    //     const {name, category, price, id} = bodyData[i]
    //     console.log(`${bodyData[i]}`)
    // }
    const values = bodyData.map(({name, category, price, id}) => `('${name}', ${category}, ${price}, ${id})`).join(',')
    db.query(`INSERT INTO orderData (prodName, category, price, prodId) VALUES${values}`, (err,rows)=>{
        res.sendStatus('200')
    })
})

app.get('/product',(req,res)=>{
    //console.log(req.query.menuId);
    db.query(`SELECT * FROM menuData WHERE category = ${parseInt(req.query.menuId)}`,(err,rows)=>{
        res.send(rows)})
    //메뉴를 클릭할때마다 해당 id의 상품을 가져오라는 요청.
    //요청을 할때 메뉴id를 보내고, 그를 이 라우터에서 받는다. 
    //클라이언트는 db에 있는 데이터를 요청을 한 것이므로 menuid를 보낸 것이고, 그 id 값이 있는 db 데이터를 받아서 다시 클라이언트 쪽으로 응답해준다. 
    //서버 측에서 응답시, 이 데이터를 ajax의 success 부분의 파라메터로 전달해준다.  
    })

app.delete('/order', (req,res)=>{
    db.query(`DELETE FROM orderData`,(err,rows)=>{
        res.sendStatus('200')
    })
})

app.put('/countupdateone',(req,res)=>{
    db.query(`UPDATE orderData SET count = ${req.query.count} WHERE prodID = ${req.query.prodId}`, (err,rows)=>{
        res.sendStatus('200')
    })
})

//RESTful API대로 라우터를 정리할 것
//
//get

app.put('/count',(req,res)=>{
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
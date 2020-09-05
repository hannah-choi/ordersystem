var express = require('express');
var router = express.Router();
const db = require("../db.js");

router.get("/",(req,res)=>{ //처음 로딩시에 카트(에 아이템이 있다면) 보여주기
    db.query(
        `SELECT cartData.id as orderId, prodName, price, category, count, menuData.Id as id FROM menuData JOIN cartData on menuData.id = cartData.prodId`, (err,rows)=>{
            res.send(rows)
        }
    )
})

router.delete("/", (req, res) => {
    console.log(req.query)
    db.query(`DELETE FROM cartData where prodId = ${parseInt(req.query.id)}`, (err, rows) => {
        res.send({ status: 200 });
    });
});

// app.put('/count',(req,res)=>{
//     db.query(`UPDATE orderData SET count = ${req.query.count} WHERE prodID = ${req.query.prodId}`, (err,rows)=>{
//         res.sendStatus('200')
//     })
// })

router.post("/", (req, res) => {
    const bodyData = req.body; //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
    db.query(
        `INSERT INTO cartData (prodId) VALUES(${bodyData.id})`,(err, rows) => {
            db.query(
                `SELECT cartData.id as orderId, prodName, price, category, count, menuData.Id as id FROM menuData JOIN cartData on menuData.id = cartData.prodId where prodId = ${bodyData.id}`,
                (err, orderedItem) => {
                    res.json({'orderedItem':orderedItem[0]}); // 배열 형태로 가져오기 때문에 보낼때는 가장 첫번째 아이템만 보내준다
                }
            );
        }
    );
});

router.put("/", (req, res) => {
    const bodyData = req.body;
    db.query(
        `UPDATE cartData SET count = ${
            bodyData.count ? parseInt(bodyData.count) : "count+1"
        } WHERE prodId = ${bodyData.prodId}`,
        (err, rows) => {
            res.send({ status: 200 });
        }
    );
    // db.query(`SELECT count FROM cartData where prodId = ${bodyData.prodId}`, (err,result)=>{
    //     res.send(result[0])
    // })
});


// app.get("/cart/delete", (req, res) => { //////////
//     //console.log(req.query.prodId)
//     db.query(
//         `DELETE FROM cartData where prodId = ${req.query.prodId}`,
//         (err, rows) => {
//             res.sendStatus("200");
//         }
//     );
// });


//RESTful API대로 라우터를 정리할 것
//
//get

module.exports = router;
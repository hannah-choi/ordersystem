var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
const db = require("../db.js");

router.get("/", (req, res) => { //처음 로딩시에 카트(에 아이템이 있다면) 보여주기
    const columns = mysql.raw('cartData.id as orderId, prodName, price, category, count, menuData.Id as id')
    const condition = mysql.raw('menuData.id = cartData.prodId')
    const sql = `SELECT ? FROM menuData JOIN cartData on ?`
    const preparedQuery = mysql.format(sql, [columns, condition]);
    db.query(
        preparedQuery, (err, rows) => {
            res.send(rows)
        }
    )
})

router.delete("/all", (req, res) => {
    db.query(`DELETE FROM cartData`, (err, rows) => {
        res.send({ status: 200 });
    });
});

router.delete("/", (req, res) => {
    function getId(){return parseInt(req.query.id)}
    const query = db.query(`DELETE FROM cartData where prodId = ?`, [getId()], (err, rows) => {
        res.send({ status: 200 });
    });
    console.log(query.sql)
});

router.post("/", (req, res) => {
    const bodyData = req.body; //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
    function getId(){return parseInt(bodyData.id)}
    const columns = mysql.raw('cartData.id as orderId, prodName, price, category, count, menuData.Id as id')
    const condition = mysql.raw('menuData.id = cartData.prodId')
    db.query(
        `INSERT INTO cartData (prodId) VALUES(?)`, [getId()], (err, rows) => {
            const query = db.query(
                `SELECT ? FROM menuData JOIN cartData on ? where prodId = ?`,
                [columns, condition, getId()],
                (err, orderedItem) => {
                    res.json({ 'orderedItem': orderedItem[0] }); // 배열 형태로 가져오기 때문에 보낼때는 가장 첫번째 아이템만 보내준다
                }
            );
        }
    );
});

router.put("/", (req, res) => {
    const bodyData = req.body;
    const condition1 = `${bodyData.count ? parseInt(bodyData.count) : "count+1"}`
    const condition2 = `${bodyData.prodId}`
    const query = db.query(
        `UPDATE cartData SET count = ? WHERE prodId = ?`, [+condition1, +condition2],
        (err, rows) => {
            res.send({ status: 200 });
        }
    );
});


module.exports = router;
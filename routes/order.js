var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
const db = require("../db.js");

router.post("/", (req, res) => {
    const bodyData = req.body;
    const values = bodyData.map(({count, id}) => `(${count === null ? 1 : count}, ${id})`).join(",");
    const table1 = mysql.raw('orderData')
    const table2 = mysql.raw('cartData')
    const columns = ["count", "prodId"]
    const sql = `INSERT INTO ? (??) VALUES${values}`;
    const preparedQuery = mysql.format(sql, [table1, columns]);
    const query = db.query(
        preparedQuery,
        (err, rows) => {
            const orderIdArray = bodyData.map(({ orderId }) => `id = ${orderId}`).join(" or ");
            const query = db.query(
                `DELETE FROM ?`, table2
            );
            res.send({ status: 200 });
        }
    );
});


router.get("/history", (req, res) => {
    //주문 이후 주문한 데이터를 가져오는 라우터
    const columns = ["prodId", "prodName", "count", "image", "category", "price"]
    const table1 = mysql.raw('orderData')
    const table2 = mysql.raw('menuData')
    const condition1 = mysql.raw("date_format(orderDate, '%d/%m/%y %T') as orderDate")
    const condition2 = mysql.raw('orderData.prodId = menuData.id')
    const sql = `SELECT ??, ? from ? join ? on ? ORDER BY orderDate DESC`;
    const preparedQuery = mysql.format(sql, [columns, condition1, table1, table2, condition2]);
    const query = db.query(preparedQuery, (err, rows) => {
        res.send(rows);
    });
    console.log(query.sql)
});



module.exports = router;

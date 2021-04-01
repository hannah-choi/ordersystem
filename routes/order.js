var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
const db = require("../db.js");

router.post("/", (req, res) => {
    const bodyData = req.body;
    const values = bodyData.map(({count, id}) => [count === null ? 1 : count, id])
    const columns = mysql.raw('(count, prodId)')
    db.query(
        `INSERT INTO orderData ? VALUES ?`, [columns, values],
        (err, rows) => {
            const orderIdArray = bodyData.map(({ orderId }) => `id = ${orderId}`).join(" or ");
            db.query(
                `DELETE FROM cartData`);
            res.send({ status: 200 });
        }
    );
});


router.get("/history", (req, res) => {
    const columns = mysql.raw("prodId, prodName, count, image, category, price, orderDate as timestamp, date_format(orderDate, '%d/%m/%y %T') as orderDate")
    const condition = mysql.raw('orderData.prodId = menuData.id')
    db.query(`SELECT ? from orderData join menuData on ? ORDER BY timestamp DESC`, [columns, condition], (err, rows) => {
        res.send(rows);
    });
});



module.exports = router;

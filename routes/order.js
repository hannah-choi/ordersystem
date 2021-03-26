var express = require('express');
var router = express.Router();
const db = require("../db.js");

router.post("/", (req, res) => {
    const bodyData = req.body;
    const values = bodyData.map(({count, id}) => `(${count === null ? 1 : count}, ${id})`).join(",");
    db.query(
        `INSERT INTO orderData (count, prodId) VALUES${values}`,
        (err, rows) => {
            console.log(`INSERT INTO orderData (count, prodId) VALUES${values}`)
            const orderIdArray = bodyData.map(({ orderId }) => `id = ${orderId}`).join(" or ");
            console.log(orderIdArray)
            db.query(
                `DELETE FROM cartData`
            );
            res.send({ status: 200 });
        }
    );
});


router.get("/history", (req, res) => {
    //주문 이후 주문한 데이터를 가져오는 라우터
    db.query(`SELECT prodId, prodName, count, image, category, price, date_format(orderDate, '%d/%m/%y %T') as orderDate from orderData join menuData on orderData.prodId = menuData.id ORDER BY orderDate DESC`, (err, rows) => {
        res.send(rows);
    });
});



module.exports = router;

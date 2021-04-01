var express = require('express');
var mysql      = require('mysql');
var router = express.Router();
const db = require("../db.js");

router.get("/", (req, res) => { //if there's anything in cart, load the items when the page is first loaded 
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
});

router.post("/", (req, res) => {
    const bodyData = req.body; 
    function getId(){return parseInt(bodyData.id)}
    const columns = mysql.raw('cartData.id as orderId, prodName, price, category, count, menuData.Id as id')
    const condition = mysql.raw('menuData.id = cartData.prodId')
    db.query(
        `INSERT INTO cartData (prodId) VALUES(?)`, [getId()], (err, rows) => {
            const query = db.query(
                `SELECT ? FROM menuData JOIN cartData on ? where prodId = ?`,
                [columns, condition, getId()],
                (err, orderedItem) => {
                    res.json({ 'orderedItem': orderedItem[0] }); 
                }
            );
        }
    );
});

router.put("/", (req, res) => {
    const bodyData = req.body;
    const condition1 = bodyData.count ? parseInt(bodyData.count) : "count+1"
    const condition2 = bodyData.prodId
    const query = db.query(
        `UPDATE cartData SET count = ? WHERE prodId = ?`, [+condition1, +condition2],
        (err, rows) => {
            res.send({ status: 200 });
        }
    );
});


module.exports = router;
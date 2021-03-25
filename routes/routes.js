var express = require('express');
var router = express.Router();
const db = require("../db.js");

router.get('/product', (req, res) => {
    const param = {category:parseInt(req.query.menuId)}
    db.query(
        `SELECT * FROM menuData WHERE ?`, param,
        (err, rows) => {
            res.send(rows);
        }
    );
    //메뉴를 클릭할때마다 해당 id의 상품을 가져오라는 요청.
    //요청을 할때 메뉴id를 보내고, 그를 이 라우터에서 받는다.
    //클라이언트는 db에 있는 데이터를 요청을 한 것이므로 menuid를 보낸 것이고, 그 id 값이 있는 db 데이터를 받아서 다시 클라이언트 쪽으로 응답해준다.
    //서버 측에서 응답시, 이 데이터를 ajax의 success 부분의 파라메터로 전달해준다.
});


module.exports = router;

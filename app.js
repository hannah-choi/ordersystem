const express = require("express"); //매번 새폴더에 작업을 할때마다 설치를 해줘야한다
const db = require("./db.js");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public")); //public 폴더를 서버에 제공하는 방법: 정적인 파일제공
// app.listen(port, () => console.log(`http://localhost:${port}`))
//public폴더에 넣은 파일을 제공

app.get("/product", (req, res) => {
    //console.log(req.query.menuId);
    db.query(
        `SELECT * FROM menuData WHERE category = ${parseInt(req.query.menuId)}`,
        (err, rows) => {
            res.send(rows);
        }
    );
    //메뉴를 클릭할때마다 해당 id의 상품을 가져오라는 요청.
    //요청을 할때 메뉴id를 보내고, 그를 이 라우터에서 받는다.
    //클라이언트는 db에 있는 데이터를 요청을 한 것이므로 menuid를 보낸 것이고, 그 id 값이 있는 db 데이터를 받아서 다시 클라이언트 쪽으로 응답해준다.
    //서버 측에서 응답시, 이 데이터를 ajax의 success 부분의 파라메터로 전달해준다.
});

app.post("/order", (req, res) => {
    const bodyData = JSON.parse(req.body.data); //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
    // for(let i = 0; i< bodyData.length; i++){
    //     const {name, category, price, id} = bodyData[i]
    //     console.log(`${bodyData[i]}`)
    // }
    const values = bodyData
        .map(({count, id}) => `(${count === null ? 1 : count}, ${id})`).join(",");
    db.query(
        `INSERT INTO orderData (count, prodId) VALUES${values}`,
        (err, rows) => {
            console.log(`INSERT INTO orderData (count, prodId) VALUES${values}`)
            const orderIdArray = bodyData.map(({ orderId }) => `id = ${orderId}`).join(" or ");
            db.query(
                `UPDATE cartData SET orderStatus = 1 where ${orderIdArray}`
            );
            res.send({ status: 200 });
        }
    );
});

app.delete("/order", (req, res) => {
    db.query(`DELETE FROM orderData`, (err, rows) => {
        res.sendStatus("200");
    });
});

app.post("/cart", (req, res) => {
    const bodyData = JSON.parse(req.body.data); //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
    db.query(
        `INSERT INTO cartData (prodId, orderStatus) VALUES(${bodyData.id}, 0)`,(err, rows) => {
            db.query(
                `SELECT cartData.id as orderId, prodName, price, category, count, menuData.Id as id FROM menuData JOIN cartData on menuData.id = cartData.prodId where prodId = ${bodyData.id}`,
                (err, orderedItem) => {
                    res.send(orderedItem[0]); // 배열 형태로 가져오기 때문에 보낼때는 가장 첫번째 아이템만 보내준다
                }
            );
        }
    );
});

app.put("/cart", (req, res) => {
    const bodyData = JSON.parse(req.body.data);
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

app.post("/orderdetail", (req, res) => {
    //주문 이후 주문한 데이터를 가져오는 라우터
    const bodyData = JSON.parse(req.body.data);
    //bodyData.orderDate = '';
    console.log(bodyData);

    //console.log('bodydata:',bodyData)
    const orderIdArray = bodyData.map(({ id }) => `prodId = ${id}`).join(" or ");
    console.log(orderIdArray);
    db.query(`SELECT prodId, prodName, count, category, price, date_format(orderDate, '%d/%m/%y %T') as orderDate from orderData join menuData on orderData.prodId = menuData.id where ${orderIdArray}`, (err, rows) => {
        res.send(rows);
    });
});

// app.get('/order', (req,res)=>{ //주문 이후 주문한 데이터를 가져오는 라우터
//     db.query(`SELECT orderData.id, prodId, orderData.prodName as prodName, orderData.price as price, count, image from orderData JOIN menuData on orderData.prodId = menuData.id`, (err,rows)=>{
//         res.sendStatus(200)
//     })
// })

//RESTful API대로 라우터를 정리할 것
//
//get

app.get("/delete", (req, res) => {
    db.query(
        `DELETE FROM orderData where prodId = ${req.query.prodId}`,
        (err, rows) => {
            res.sendStatus("200");
        }
    );
});

app.listen(port, function () {
    console.log("http://localhost:8080");
});

app.post("/order", (req, res) => {
    const bodyData = req.body; //배열인지 문자인지 구분을 못하기 때문에, 배열을 객체 형태로 쓰기 위해 JSON 형식을 쓰고, 그를 쓰기 위해서 parsing을 해줘야한다
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
                `DELETE FROM cartData`
            );
            res.send({ status: 200 });
        }
    );
});


app.get("/order/history", (req, res) => {
    //주문 이후 주문한 데이터를 가져오는 라우터
    db.query(`SELECT prodId, prodName, count, image, category, price, date_format(orderDate, '%d/%m/%y %T') as orderDate from orderData join menuData on orderData.prodId = menuData.id`, (err, rows) => {
        res.send(rows);
    });
});
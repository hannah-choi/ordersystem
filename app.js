const express = require("express"); //매번 새폴더에 작업을 할때마다 설치를 해줘야한다
const db = require("./db.js");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public")); //public 폴더를 서버에 제공하는 방법: 정적인 파일제공
// app.listen(port, () => console.log(`http://localhost:${port}`))
//public폴더에 넣은 파일을 제공


app.listen(port, function () {
    console.log("http://localhost:8080");
});

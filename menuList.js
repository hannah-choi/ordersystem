let $nav = document.querySelector('.ul_nav'); //nav_ul

const menuList = {

    setState(data) { //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도 
        this.data = data;
        this.navRender();
        this.listRender();

    },

    navRender() { //html요소를 직접적으로 만드는 함수

        let contents = "";


        for (let i = 0; i < this.data.length; i++) {

            contents += `<li data-index="${i}">${this.data[i].menu}</li>` //가공해서 넣어주기
        }

        $nav.innerHTML = contents;
    },

    listRender() {
        let $menuList = document.querySelector('.menu_list');
        let contents = "";
        let index = 0; //클릭한 li의 인덱스

        // for (let i = 0; i < this.data.length; i++) {
        //     let menuListLength = this.data[i].list.length;
        //     //console.log(menuListLength)

        let menuList = this.data[index].list.length;
        console.log(menuList);
        for (let i = 0; i < menuList; i++) {
            console.log(this.data[index].list[i]);

            const list = this.data[index].list[i]
            const fileName = list.name.split(' ').join('').toLowerCase();
            //const fileName = fileNameStr.toLowerCase();

            console.log(fileName)

            contents += `<li><img
            src="images/${list.category}_${fileName}.webp"> 
            <span class="prod_name">${list.name}</span><span class="prod_price">£ ${list.price.toFixed(2)}</span></li>` //가공해서 넣어주기


        }




        //contents += `<li data-index="${i}">${this.data[i].menu}</li>` //가공해서 넣어주기

        $menuList.innerHTML = contents;




        //
    }
}

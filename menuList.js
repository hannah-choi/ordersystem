const $nav = document.querySelector('.ul_nav'); //nav_ul
const $table = document.querySelector('.order_table');

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
        // console.log(menuList);
        for (let i = 0; i < menuList; i++) {
            // console.log(this.data[index].list[i]);
            const list = this.data[index].list[i]
            const fileName = list.name.split(' ').join('').toLowerCase();
            //const fileName = fileNameStr.toLowerCase();
            // console.log(fileName)
            contents += `<li><img
            src="images/${list.category}_${fileName}.webp"> 
            <span class="prod_name">${list.name}</span><span class="prod_price">£ ${list.price.toFixed(2)}</span></li>`
        }
        $menuList.innerHTML = contents;
    }
}

const orderList = {
    setState(data) {
        this.data = data;
        this.orderRender();
    },

    orderRender() {
        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            contents += `<tr>
            <td class="order_prod_name">${this.data[i].name}</td>
            <td class="order_quantity"><label for="quantity"><select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select></td>
            <td class="order_price">£ ${this.data[i].price.toFixed(2)}</td>
            <td class="order_delete"><input type="button" class="order_delete" value="×"></td>
        </tr>`
        }

        $table.innerHTML = contents;
    }
}

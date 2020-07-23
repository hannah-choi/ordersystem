//오로지 데이터만 관리하는 용도

import MenuList from "./menuList.js"
import OrderList from "./orderList.js"

class App {
    constructor(menuData) {
        this.menuList = new MenuList() //선택된 탭을 구분짓고자 파라메터로 넣어준다
        this.orderList = new OrderList();
        this.$app = document.querySelector('#app') //선언하는 부분이므로 constructor안에 넣는다 
        this.data = menuData
        this.orderData = []
    }
    init() {
        this.menuList.setState(this.data, 0)
        this.orderList.setState(this.orderData, 0)



        this.$app.addEventListener('click', ({ target }) => {
            let dataIndex = "";
            switch (target.dataset.key) { //스위치는 괄호업ㅅ이
                case 'navItem':
                    this.menuList.setState(this.data, target.dataset.index)
                    break;
                case 'menuItem':
                    //this.orderData//지금은 비어있는배열에 push해서 상품을 넣어준다
                    let selected = this.data[this.menuList.selectTab].list[target.dataset.index];
                    this.orderData.push(selected)
                    this.orderList.setState(this.orderData)
                    break;
                case 'deleteItem':
                    alert('delete Item')
                    break;
                case 'icon_trash':
                    this.orderData.splice(0,)
                    this.orderList.setState(this.orderData)
                    break;
                case 'TD':
                    alert('quantity')
                    break;
                case 'total':
                    alert('pay button')
                    break;
                default:
                    return;
            }





        }

        );

    }


}

export default App

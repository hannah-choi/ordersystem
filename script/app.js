//오로지 데이터만 관리하는 용도
import MenuList from "./menuList.js"
import OrderList from "./orderList.js"
import menuData from './menuData.js'

class App {
    constructor() {
        this.menuList = new MenuList() //선택된 탭을 구분짓고자 파라메터로 넣어준다
        this.orderList = new OrderList();
        this.data = menuData
        this.orderData = [];
        this.$app = document.querySelector('#app') //선언하는 부분이므로 constructor안에 넣는다
    }
    init() {
        this.menuList.setState(this.data, 0)
        this.orderList.setState(this.orderData, this.data, this.menuList)
        this.$app.addEventListener('click', ({ target }) => {

            switch (target.dataset.key) { //스위치는 괄호업ㅅ이
                case 'navItem':
                    this.menuList.setState(this.data, target.dataset.index)
                    break;
                case 'menuItem':
                    this.orderList.menuItemClick(target)
                    break;
                case 'deleteItem':
                    this.orderList.deleteClick(target)
                    break;
                case 'icon_trash': // 숙제(옵션) 삭제되는 기능까지 구현
                    this.orderList.allClearClick(target);
                    break;
                case 'pay_button':
                    alert('!!!')
                    this.orderList.payButtonClick(target);
                    break;
                default:
                    return;
            }
        })

        this.$app.addEventListener('change', ({ target }) => {
            switch (target.dataset.key) {
                case 'selectbox':
                    this.changeSelectBox(target);
                    break;
            }
        })
    }

}

export default App

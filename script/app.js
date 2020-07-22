//오로지 데이터만 관리하는 용도

import MenuList from "./menuList.js"
import OrderList from "./orderList.js"

class App {
    constructor(menuData) {
        this.menuList = new MenuList() //선택된 탭을 구분짓고자 파라메터로 넣어준다
        this.orderList = new OrderList();
        this.$app = document.querySelector('#app') //선언하는 부분이므로 constructor안에 넣는다 
        this.data = menuData
        this.orderData = [
            //주문한 제품의 데이터
            {
                name: "Li Shan Oolong",
                price: 45.00,
                quantity: 1

            },
            {
                name: "Premium Jasmine Green Tea",
                price: 15.00,
                quantity: 1
            },
            {
                name: "Roasted Shanlinsi Oolong",
                price: 28.00,
                quantity: 2
            },

        ]
    }
    init() {
        this.menuList.setState(this.data, 0)
        this.orderList.setState(this.orderData)



        this.$app.addEventListener('click', ({ target }) => {
            // console.log(e.target.parentElement.parentElement)
            //console.log(e.target.parentElement.parentElement.nodeName)
            switch (target.dataset.key) {
                case ('navItem'):
                    this.menuList.setState(this.data, target.dataset.index)
                    break;
                case ('menuItem'):
                    alert('menuItem')
                    break;
                case ('deleteItem'):
                    alert('delete Item')
                    break;
                case ('icon_trash'):
                    alert('delete all')
                    break;
                case ('TD'):
                    alert('quantity')
                    break;
                case ('total'):
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

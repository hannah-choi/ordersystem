//오로지 데이터만 관리하는 용도
import MenuList from "./menuList.js"
import OrderList from "./orderList.js"

class App {
    constructor() {
        this.menuList = new MenuList() //선택된 탭을 구분짓고자 파라메터로 넣어준다
        this.orderList = new OrderList();
        this.$app = document.querySelector('#app') //선언하는 부분이므로 constructor안에 넣는다
    }
    init() {
        this.$app.addEventListener('click', ({ target }) => {

            switch (target.dataset.key) { //스위치는 괄호업ㅅ이
                case 'navItem':
                    $.ajax({
                        url:'http://localhost:8080/',
                        type: 'get',
                        data:{
                            menuId:target.dataset.index
                        },
                        success:
                        console.log('???')
                    })
                    this.menuList.setState(target.dataset.index)

                    break;
                case 'menuItem':
                    this.menuItemClick(target)
                    break;
                case 'deleteItem':
                    this.orderList.deleteClick(target)
                    break;
                case 'icon_trash': // 숙제(옵션) 삭제되는 기능까지 구현
                    this.orderList.allClearClick(target);
                    break;
                case 'pay_button':
                    this.orderList.payButtonClick(target);
                    break;
                default:
                    return;
            }
        })

        this.$app.addEventListener('change', ({ target }) => {
            switch (target.dataset.key) {
                case 'selectbox':
                    this.orderList.changeSelectBox(target);
                    break;
            }
        })
    }

    menuItemClick(target) {

        // selected = 메뉴데이터에서 클릭한 해당 아이템
        const selected = this.menuList.data.list.find(product => product.id == target.dataset.id)
        const selectedIndex = this.orderList.data.findIndex(product => product.id == selected.id)
        //selected가 orderdata에 없으면 
        if (selectedIndex === -1) { //객체 자체가 아닌 객체 내의 속성을 비교
            selected.count = 1;
            this.orderList.addProduct(selected)
        } else {
            //index = 선택한 orderData의 인덱스를 가지고 오는것: 배열이 두개 있다는 것에 주의!
            this.orderList.changeCount(selectedIndex)
        }

        // $.ajax({
        //     url:"http://localhost:8080/addOrder",
        //     type:'get',
        //     data:{
        //         name: selected.name,
        //         count: selected.count,
        //         category: selected.category,
        //         price: selected.price
        //     },
        //     success:
        //     console.log('!!!')
        // })

    }
}

export default App

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
        this.$total = document.querySelector('.total')
        this.$table = document.querySelector('.order_table')
        this.countClick = 0;

    }
    init() {
        this.menuList.setState(this.data, 0)
        this.orderList.setState(this.orderData)
        this.$app.addEventListener('click', ({ target }) => {

            switch (target.dataset.key) { //스위치는 괄호업ㅅ이
                case 'navItem':
                    this.menuList.setState(this.data, target.dataset.index)
                    break;
                case 'menuItem':
                    this.menuItemClick(target)
                    break;
                case 'deleteItem':
                    this.deleteClick(target)
                    break;
                case 'icon_trash': // 숙제(옵션) 삭제되는 기능까지 구현
                    this.allClearClick(target);
                    break;
                case 'TD':
                    alert('quantity')
                    break;
                case 'pay_button':
                    alert('!!!')
                    this.payButtonClick(target);
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




    selected(target) {
        return this.data[this.menuList.selectTab].list[target.dataset.index]
    }

    selectedIndex(target) {
        return this.orderData.findIndex(data => data === this.selected(target))
    }


    menuItemClick(target) {
        //this.orderData//지금은 비어있는배열에 push해서 상품을 넣어준다
        //this.sumValue = this.orderData.map(orderData => orderData.price)
        if (this.selectedIndex(target) === -1) { //숙제 : find함수 말고 다른애로 변경
            const selected = this.selected(target)
            selected.count = 1;
            this.orderData.push(selected)
            this.orderList.setState(this.orderData, selected.count)
            //this.menuData.push({...selected, count:0})
        } else {
            //console.log(this.selectedIndex(target))
            this.orderData[this.selectedIndex(target)].count++;
            this.orderList.setState(this.orderData, this.orderData[this.selectedIndex(target)].count)
            //this.orderList.makeSelect(this.orderData[selectedIndex].count)
        }
        //this.orderList.setState(this.orderData, this.orderData[selectedIndex].count);

        //undefined가 나오면 push를 해주고 아니면 이미 있다는 뜻이니까 push를 해줄 필요가 없음

        console.log()

    }

    deleteClick(target) {
        this.orderData.splice(this.selectedIndex(target), 1)
        this.orderList.setState(this.orderData);

    }

    allClearClick() {
        this.orderData.splice(0,)
        this.sum.splice(0,)
        this.orderList.setState(this.orderData)
    }

    payButtonClick(target) {


    }


    changeSelectBox(target) {
        let dataindex = target.parentElement.parentElement.parentElement.dataset.index;
        this.orderData[dataindex].count = target.value;
        this.orderList.setState(this.orderData)
    }

}

export default App

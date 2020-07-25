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
        this.sum = [];
        this.sumValue = 0;
        this.$total = document.querySelector('.total')

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
                    //this.orderData//지금은 비어있는배열에 push해서 상품을 넣어준다
                    let selected = this.data[this.menuList.selectTab].list[target.dataset.index];


                    //this.sum.push(selected.price)



                    // this.sumValue = this.sum.reduce(function (a, b) {
                    //     return a + b
                    // }, 0)

                    //숙제 : sum이라는 배열없이도 가능! orderData(selected.price와 같으므로)


                    if ((this.orderData.find(data => data === selected) === undefined)) { //숙제 : find함수 말고 다른애로 변경
                        selected.count = 0;
                        this.orderData.push(selected);
                        //this.menuData.push({...selected, count:0})
                        console.log(this.orderData.map(orderData => orderData.price))
                        this.orderList.setState(this.orderData);
                    } else {
                        //1. 카운트를 증가시킨다
                        //this.orderData[selected].count?
                        let selectedIndex = this.orderData.findIndex(data => data === selected) // 선택한 아이템의 인덱스를 찾아준다
                        this.orderData[selectedIndex].count++;
                        console.log(this.orderData[selectedIndex].count)

                        //2. 증가된 데이터를 orderData에 반영

                    }

                    console.log(this.orderData)

                    //undefined가 나오면 push를 해주고 아니면 이미 있다는 뜻이니까 push를 해줄 필요가 없음


                    // this.sum.push(selected.price);

                    // this.sumValue = this.sum.reduce(function (a, b) {
                    //     return a + b
                    // }, 0)

                    // this.orderList.setState(this.orderData);
                    // this.orderList.totalRender(this.sumValue.toFixed(2));






                    break;
                case 'deleteItem':
                    alert('delete Item')
                    break;
                case 'icon_trash': // 숙제(옵션) 삭제되는 기능까지 구현
                    this.orderData.splice(0,)
                    this.sum.splice(0,)
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

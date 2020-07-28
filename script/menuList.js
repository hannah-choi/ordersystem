import menuData from './menuData.js'

class MenuList {
    constructor() {
        this.$nav = document.querySelector('.ul_nav') //반복적으로 변수에 할당을 하고싶지 않을때, 전역변수 대신에 이곳에 선언을 하는 것(과부하 방지)
        this.$menuList = document.querySelector('.menu_list');
        //this.data = menuData
        this.selectTab = null;
        this.data = menuData
        this.setState(0)
    }

    setState(selectTab) { //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도 
        //상태를 변경해주는 함수
        this.selectTab = selectTab;
        this.navRender();
        this.listRender();
    }

    navRender() { //html요소를 직접적으로 그려주는 함수
        this.$nav.innerHTML = this.data.menu.map((menu, index) => `<li data-index="${index}" class="${index === parseInt(this.selectTab) ? "active" : ""}"
        data-key="navItem">${menu}</li>`).join('')
    }
    //+ 기호를 앞에 붙이면 parseInt처럼 사용가능 
    listRender() {
        let selectTab = this.selectTab; //클릭한 li의 인덱스
        let list = this.data.list.filter(data => data.category === +selectTab)
        let fileNameList = list.map(data => data.name)

        this.$menuList.innerHTML = list.map((item, index) => `<li data-key="menuItem"><img data-key="menuItem" data-index="${index}"
        src="images/${item.category}_${fileNameList[index].split(' ').join('').toLowerCase()}.webp"> 
        <span class="prod_name">${item.name}</span><span class="prod_price">£ ${item.price.toFixed(2)}</span></li>`).join('')

    }
}

export default MenuList

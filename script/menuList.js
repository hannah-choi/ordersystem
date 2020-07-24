class MenuList {
    constructor() {
        this.$nav = document.querySelector('.ul_nav') //반복적으로 변수에 할당을 하고싶지 않을때, 전역변수 대신에 이곳에 선언을 하는 것(과부하 방지)
        this.$menuList = document.querySelector('.menu_list');
        this.selectTab = null;
    }

    setState(data, selectTab) { //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도 
        //상태를 변경해주는 함수
        this.data = data;
        this.selectTab = selectTab;
        this.navRender();
        this.listRender();
    }

    navRender() { //html요소를 직접적으로 그려주는 함수
        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            contents += `<li data-index="${i}" class="${i === parseInt(this.selectTab) ? "active" : ""}" data-key="navItem">${this.data[i].menu}</li>`
        }
        this.$nav.innerHTML = contents;
    }

    //+ 기호를 앞에 붙이면 parseInt처럼 사용가능 


    listRender() {
        let contents = "";
        let index = this.selectTab; //클릭한 li의 인덱스
        let menuList = this.data[index].list.length;

        for (let i = 0; i < menuList; i++) {
            const list = this.data[index].list[i]
            const fileName = list.name.split(' ').join('').toLowerCase();
            contents += `<li data-key="menuItem"><img data-key="menuItem" data-index="${i}"
            src="images/${list.category}_${fileName}.webp"> 
            <span class="prod_name">${list.name}</span><span class="prod_price">£ ${list.price.toFixed(2)}</span></li>`
        }
        this.$menuList.innerHTML = contents;
    }


}

export default MenuList

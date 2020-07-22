class MenuList {
    constructor(selectTab) {
        this.$nav = document.querySelector('.ul_nav')
        this.selectTab = selectTab
    }

    setState(data) { //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도 
        this.data = data;
        this.navRender();
        this.listRender();
    }

    navRender() { //html요소를 직접적으로 만드는 함수
        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            if (i === this.selectTab) {
                contents += `<li data-index="${i}" class="active">${this.data[i].menu}</li>`
            } else {
                contents += `<li data-index="${i}">${this.data[i].menu}</li>`
            } //가공해서 넣어주기
        }
        this.$nav.innerHTML = contents;
    }

    listRender() {
        let $menuList = document.querySelector('.menu_list');
        let contents = "";
        let index = 0; //클릭한 li의 인덱스

        let menuList = this.data[index].list.length;

        for (let i = 0; i < menuList; i++) {
            const list = this.data[index].list[i]
            const fileName = list.name.split(' ').join('').toLowerCase();
            contents += `<li><img
            src="images/${list.category}_${fileName}.webp"> 
            <span class="prod_name">${list.name}</span><span class="prod_price">£ ${list.price.toFixed(2)}</span></li>`
        }
        $menuList.innerHTML = contents;
    }
}

export default MenuList

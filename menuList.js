const menuList = {

    setState(data) { //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도 
        this.data = data;
        this.navRender();
        this.listRender();
    },

    navRender() { //html요소를 직접적으로 만드는 함수
        $list = document.querySelector('.ul_nav'); //nav_ul
        let contents = "";


        for (let i = 0; i < this.data.length; i++) {

            contents += `<li>${this.data[i].menu}</li>` //가공해서 넣어주기

        }

        $list.innerHTML = contents;
    },

    listRender() {
        //리스트 함수를 직접 구현할 것
    }

}
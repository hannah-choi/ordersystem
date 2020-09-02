class MenuList {
    constructor() {
        this.$nav = document.querySelector(".ul_nav"); //반복적으로 변수에 할당을 하고싶지 않을때, 전역변수 대신에 이곳에 선언을 하는 것(과부하 방지)
        this.$menuList = document.querySelector(".menu_list");
        //this.data = menuData
        this.selectTab = null;
        this.data = null;
        this.navRender();
        this.productLoad();
    }

    productLoad(menuID = 0) {
        fetch(`/product?menuId=${menuID}`, {
            method:'get',
            headers:{
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            }
        }
        )
        .then(res => {
            if (!res.ok) {                                   
                throw new Error("HTTP error " + res.status); 
            }                                                
            return res.json();
        })
        .then(data => {
            this.setState(menuID, data);
        })
        .catch(error => {
           console.log(error)
        });



        
        // $.ajax({
        //     url: "http://localhost:8080/product",
        //     type: "get",
        //     data: {
        //         menuId: menuID,
        //     },
        //     success: function (data) {
        //         // 여기서의 data(혹은 result)는 서버에서 응답으로 보내주는 data를 의미한다
        //         menuList.setState(menuID, data);
        //     },
        // });
    }

    setState(selectTab, data) {
        //app.js에서 데이터를 받아서 데이터를 갱신해주는 용도
        //상태를 변경해주는 함수
        this.selectTab = selectTab;
        this.data = data;
        this.navRender();
        this.listRender();
    }

    navRender() {
        //html요소를 직접적으로 그려주는 함수
        const menuData = ["LOOSE TEA", "TEA BAG", "GIFT BOX"];
        this.$nav.innerHTML = menuData
            .map((menu, index) => `<li data-index="${index}" class="${index === parseInt(this.selectTab) ? "active" : ""}" data-key="navItem">${menu}</li>`).join("");
    }
    //+ 기호를 앞에 붙이면 parseInt처럼 사용가능
    listRender() {
        let selectTab = this.selectTab; //클릭한 li의 인덱스
        let list = this.data;

        this.$menuList.innerHTML = list.map((item,index) => `<li data-key="menuItem"><img data-key="menuItem" data-id="${item.id}" src="/images/${item.image}.webp"><span class="prod_name">${item.prodName}</span><span class="prod_price">£ ${item.price.toFixed(2)}</span></li>`)
            .join("");
    }
}
export default MenuList;

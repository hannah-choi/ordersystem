//오로지 데이터만 관리하는 용도


const app = {
    data: [
        //메뉴 2개 상품은 2개
        {
            menu: "Loose Tea",
            list: [{
                name: "Alishan Jingsyuan",
                price: 20.00
            },
            {
                name: "Si ji chun",
                price: 30.00
            }]
        },
        {
            menu: "Tea bag",
            list: [{
                name: "Alishan Jingsyuan",
                price: 20.00
            },
            {
                name: "Si ji chun",
                price: 30.00
            }]
        }

    ],
    init() { //index에서 이 함수를 호출시 초기화시키는 용도
        menuList.setState(this.data)
    }
}




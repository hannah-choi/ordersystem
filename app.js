//오로지 데이터만 관리하는 용도


const app = {
    data: [
        //메뉴 3개, 상품 최소 2-3개, 이미지 로컬로 준비해서 images에 넣을것 
        {
            menu: "LOOSE TEA",
            list: [{
                name: "Alishan Jingsyuan",
                price: 18.00,
                category: 'loosetea',
                id: 0

            },
            {
                name: "Lishan Oolong",
                price: 45.00,
                category: 'loosetea',
                id: 1
            },
            {
                name: "Tie Guan Yin",
                price: 25.00,
                category: 'loosetea',
                id: 2
            },
            {
                name: "Roasted Shanlinsi Oolong",
                price: 28.00,
                category: 'loosetea',
                id: 3
            },
            {
                name: "Premium Jasmine Green Tea",
                price: 15.00,
                category: 'loosetea',
                id: 4
            },
            {
                name: "Oriental Beauty",
                price: 24.00,
                category: 'loosetea',
                id: 5
            },
            {
                name: "Aged Tie Guan Yin",
                price: 35.00,
                category: 'loosetea',
                id: 6
            },
            {
                name: "Aged Dongding Oolong",
                price: 42.00,
                category: 'loosetea',
                id: 7
            }]

        },
        {
            menu: "TEA BAG",
            list: [{
                name: "Si Ji Chun",
                price: 5.00,
                category: 'teabag',
                id: 0
            },
            {
                name: "Alishan Jingsyuan",
                price: 5.00,
                category: 'teabag',
                id: 1
            },
            {
                name: "Lightly Roasted DongDing Oolong",
                price: 5.00,
                category: 'teabag',
                id: 2
            },
            {
                name: "Tie Guan Yin",
                price: 5.00,
                category: 'teabag',
                id: 3
            },
            {
                name: "Premium Jasmine Green Tea",
                price: 5.00,
                category: 'teabag',
                id: 4
            },
            {
                name: "Guei Fei Tea",
                price: 5.00,
                category: 'teabag',
                id: 5
            }]
        },

        {
            menu: "GIFT BOX",
            list: [{
                name: "Alishan Oolong + Premium Jasmine Green Tea",
                price: 40.00,
                category: 'giftbox',
                id: 0
            },
            {
                name: "Si ji Chun + Lightly roasted Oolong Tea",
                price: 30.00,
                category: 'giftbox',
                id: 1
            },
            {
                name: "Lightly Roasted Oolong Tea + Premium Jasmine Green Tea",
                price: 35.00,
                category: 'giftbox',
                id: 2
            }]
        }

    ],
    init() { //index에서 이 함수를 호출시 초기화시키는 용도
        menuList.setState(this.data)
    }
}




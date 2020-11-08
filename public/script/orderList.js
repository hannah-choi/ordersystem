import menuData from './menuData.js'
//import { head } from '../../routes/cart'

class OrderList {
    constructor() {
        this.$table = document.getElementById('tableArea')
        this.$total = document.querySelector('.total')
        this.$title = document.getElementById('billTitle')
        this.$billHeader = document.getElementById('billHeader')
        this.$tableArea = document.getElementById('tableArea')
        this.$buttonArea = document.getElementById('buttonArea')
        this.$total = document.querySelector('.total')
        this.data = []
        this.orderedData = []
        this.menuData = menuData
        this.getCartData();
    }

    setState(data) {
        this.data = data;
        this.orderRender();
    }

    getCartData() {
        fetch('cart', {
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then(data => {
                this.setState(data)
            })
            .catch(error => {
                console.log(error)
            });

    }


    makeSelect(count) { //카운트 파라메터를 받아서 i랑 비교할 것 
        let options = ""
        for (let i = 1; i <= 10; i++) {
            options += `<option value="${i}" ${i === +count ? "selected" : ""}>${i}</option>`
            //options += `<option value="${i}" ${i === count ? "selected" : ""}>${i}</option>`
        }
        let selectbox = `<select name="quantity" id="quantity" data-key="selectbox">${options}</select>`
        return selectbox
    }




    orderRender() {
        //console.log(this.data)
        this.$title.innerText = "SHOPPING CART"
        let contents = "";
        let itemTotal = 0;
        for (let i = 0; i < this.data.length; i++) {
            itemTotal += this.data[i].price * this.data[i].count;
            contents += `<table class="cartTable">
            <tr data-key="cartItem" data-index="${i}" data-id="${this.data[i].id}">
            <td class="cartProdName">${this.data[i].prodName}</td>
            <td class="cartQuantity"><label for="quantity">
                ${this.makeSelect(this.data[i].count)} 
                    </td>
            <td class="cartPrice">£ ${(this.data[i].price * this.data[i].count).toFixed(2)}</td>
            <td class="cartDelete"><input type="button" class="cartdelete" value="×" data-key="deleteItem"></td>
        </tr></table>`

        }
        this.$table.innerHTML = contents;
        this.totalRender(itemTotal.toFixed(2));
        ////
    }



    orderViewRender(rows) {
        let contents = "";
        for (let i = 0; i < rows.length; i++) {
            //itemTotal += this.data[i].price * this.data[i].count;
            contents += `<table class="orderDataTable">
                            <tr class ="orderInfo" data-key="prodInfo">
                                <td colspan="5" class="orderProdName">${rows[i].prodName}</td>
                                <td class="prodId"></td>
                            </tr>
                            <tr class ="orderDetail" data-key="orderData" data-index="${i}" data-id="${rows[i].id}">
                                <td class="orderDataImage"><img src="images/${rows[i].image}.webp"></td>
                                <td class="orderDataPrice">£ ${(rows[i].price * rows[i].count).toFixed(2)}</td>
                                <td class="orderQuantity"><label for="quantity">${rows[i].count}</td>
                                <td colspan="3" class="orderDate">${rows[i].orderDate}</td>
                        </table>`
        }
        this.$table.innerHTML = contents;


    }

    orderHistoryChange() {
        this.$billHeader.innerHTML = `<h2>ORDER HISTORY</h2>`
        this.$tableArea.style.height = "580px"
        this.$total.style.opacity = "0"

        let orderHistoryButton = `<a href="/"><input type="button" id="backButton" data-key="backButton" value="CONTINUE SHOPPING"></a>`

        this.$buttonArea.innerHTML = orderHistoryButton
    }

    totalRender(value) {
        let totalDiv = `<span class="totalText">Total</span><span class="totalValue">£ ${value}</span>`
        this.$total.innerHTML = totalDiv
    }

    deleteClick(target) {
        const selectedIndex = target.parentElement.parentElement.dataset.index
        //const selectedIndex = this.data.findIndex(product => product.index === target.dataset.index)
        const selectedId = this.data[selectedIndex].id;

        fetch(`/cart?id=${selectedId}`, {
            method: 'delete',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then(data => {
                this.data.splice(selectedIndex, 1)
                this.orderRender()
            })
            .catch(error => {
                console.log(error)
            });

        // $.ajax({
        //     url:'http://localhost:8080/delete',
        //     type:'get',
        //     data:{
        //         prodId: selectedId
        //     },
        //     success:
        //     console.log('delete')
        // })

    }

    allClearClick() {
        $.ajax({
            url: "http://localhost:8080/allclear",
            type: "get",
            success:
                console.log('allclear')
        })
        this.data.splice(0,)
        this.orderRender()
    }

    orderDataButtonClick() {
        //console.log(this.data)
        fetch('order/history', {
            method: 'get',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then(data => {
                this.orderViewRender(data)
            })
            .catch(error => {
                console.log(error)
            });

    }

    payButtonClick() {
        let dataArray = this.data;
        console.log('dataArray', dataArray)

        fetch('order', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            },
            body: JSON.stringify(dataArray)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then(data => {
                alert("Order completed")
                this.orderedData = dataArray;
                this.data = [];
                this.orderRender();
            })
            .catch(error => {
                console.log(error)
            });
    }

    changeSelectBox(target) {
        let dataindex = target.parentElement.parentElement.parentElement.dataset.index;
        this.changeCount(dataindex, target.value)
    }

    addProduct(selected) { //selected로 받은 데이터를 this.data에 푸쉬
        fetch('cart', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json; charset = UTF-8"
            },
            body: JSON.stringify(selected),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("HTTP error " + res.status);
                }
                return res.json();
            })
            .then(data => {
                this.data.push(data.orderedItem),
                    this.orderRender()
            })
            .catch(error => {
                console.log(error)
            });
    }

    changeCount(index, count) {
        //1씩 증가하는 경우: 같은 아이템을 중복 클릭했을 때 
        //targetValue대로 count가 변해야하는 경우: 셀렉트박스로 수량을 증감시켰을때
        const orderList = this
        const selected = this.data[index]

        if (!count) { //상품을 클릭했을때, 즉 카운트를 못받을 경우
            if (this.data[index].count == 10) {
                return;
            }

            fetch('cart', {
                method: 'put',
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json; charset = UTF-8"
                },
                body: JSON.stringify({
                    prodId: selected.id,
                    count: parseInt(selected.count + 1)
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("HTTP error " + res.status);
                    }
                    return res.json();
                })
                .then(data => {
                    this.data[index].count++;
                    this.orderRender();
                })
                .catch(error => {
                    console.log(error)
                });
        }
        else {
            fetch('cart', {
                method: 'put',
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json; charset = UTF-8"
                },
                body: JSON.stringify({
                    prodId: selected.id,
                    count: parseInt(count)
                })
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("HTTP error " + res.status);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(count)
                    console.log(this.data[index].count)
                    this.data[index].count = count;
                    this.orderRender();
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
}

export default OrderList

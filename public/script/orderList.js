import menuData from './menuData.js'

class OrderList {
    constructor() {
        this.$table = document.getElementById('tableArea')
        this.$total = document.querySelector('.total')
        this.$title = document.getElementById('billTitle')
        this.data = []
        this.orderedData = []
        this.menuData = menuData
        this.getCartData();
    }

    setState(data) {
        this.data = data;
        this.orderRender();
    }

    getCartData(){
        const orderList = this;
            $.ajax({
                url:"http://localhost:8080/cart",
                type:"get",
                dataType:"json",
                success:function(result){
                    orderList.setState(result)
                }
            })
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

    orderViewRender(rows){
        this.$title.innerText = "VIEW ORDER"
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


    totalRender(value) {
        let totalDiv = `<span class="total_text">Total</span><span class="total_value">£ ${value}</span>`
        this.$total.innerHTML = totalDiv
    }

    deleteClick(target) {
        const selectedIndex = target.parentElement.parentElement.dataset.index
        //const selectedIndex = this.data.findIndex(product => product.index === target.dataset.index)
        const selectedId = this.data[selectedIndex].id;
        $.ajax({
            url:'http://localhost:8080/delete',
            type:'get',
            data:{
                prodId: selectedId
            },
            success:
            console.log('delete')
        })
        this.data.splice(selectedIndex, 1)
        this.orderRender()
    }

    allClearClick() {
        $.ajax({
            url:"http://localhost:8080/allclear",
            type:"get",
            success:
            console.log('allclear')
        })
        this.data.splice(0,)
        this.orderRender()
    }

    orderDataButtonClick(){
        //console.log(this.data)
        const orderList = this;
        let orderDataArray = this.orderedData;
        console.log(orderDataArray)
        $.ajax({
            url:"http://localhost:8080/order/history",
            type:"get",
            dataType: "json",
            data: {data:JSON.stringify(orderDataArray)},
            success: function(result){
                console.log('success')
                orderList.orderViewRender(result);
            }
        })
             //this.totalRender(itemTotal.toFixed(2));      
    }

    payButtonClick() {
        const orderList = this;
        let dataArray = this.data;
        console.log('dataArray',dataArray)
        $.ajax({
            url:"http://localhost:8080/order",
            type:"post",
            dataType: "json",
            data: {data:JSON.stringify(dataArray)},
            success: function(){
                alert("Order completed")
                orderList.orderedData = dataArray;
                orderList.data = [];
                orderList.orderRender();
            }
        })
        // if (this.data.length > 0) {
        //     //console.log(JSON.stringify(this.data))
        //     fetch(`http://127.0.0.1:3000/write?data=${JSON.stringify(this.data)}`)
        //         .then(response => response.text())
        //         .then(data => alert("Order completed"))
        //         .catch(() => {
        //             console.log('error')
        //         })
        // } else {
        //     alert('Please add a product')
        // }
    }

    changeSelectBox(target) {
        let dataindex = target.parentElement.parentElement.parentElement.dataset.index;
        this.changeCount(dataindex, target.value)
    }

    addProduct(selected) { //selected로 받은 데이터를 this.data에 푸쉬
        const orderList = this;

        fetch('http://localhost:8080/cart', {
            method:'post',
            headers:{
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
            console.log(data)
        })
        .catch(error => {
           console.log(error)
        });



        // $.ajax({
        //     url:"http://localhost:8080/cart",
        //     type:"post",
        //     dataType: "json",
        //     data: {data:JSON.stringify(selected)},
        //     success: function(orderedItem){
        //         orderList.data.push(orderedItem),
        //         orderList.orderRender()
        //     }
        // })
        
    }

    changeCount(index, count) {
        //1씩 증가하는 경우: 같은 아이템을 중복 클릭했을 때 
        //targetValue대로 count가 변해야하는 경우: 셀렉트박스로 수량을 증감시켰을때
        const orderList = this
        const selected = this.data[index]
        //console.log('count:',count)
        if (!count) { //상품을 클릭했을때, 즉 카운트를 못받을 경우
            if (this.data[index].count == 10) {
                return;
            }
            $.ajax({
                url:"http://localhost:8080/cart",
                type:"put",
                dataType:"json",
                data: { data: JSON.stringify({
                    prodId: selected.id,
                    count: selected.count+1
                })},
                success: function(){
                    orderList.data[index].count++;
                    orderList.orderRender()}
            })
        }
        else {
            $.ajax({
                url:"http://localhost:8080/cart",
                type:"put",
                dataType:"json",
                data: { data: JSON.stringify({
                    prodId: selected.id,
                    count: count
                })},
                success: function(){
                    orderList.data[index].count = count;
                    orderList.orderRender()}
            })
        }   
    }
}

export default OrderList

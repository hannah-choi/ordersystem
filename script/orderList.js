import menuData from './menuData.js'

class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
        this.$total = document.querySelector('.total')
        this.data = []
        this.menuData = menuData
    }

    setState(data) {
        this.data = data;
        this.orderRender();
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
        let contents = "";
        let itemTotal = 0;
        for (let i = 0; i < this.data.length; i++) {
            itemTotal += this.data[i].price * this.data[i].count;
            contents += `<tr data-key="orderedItem" data-index="${i}">
            <td class="order_prod_name">${this.data[i].name}</td>
            <td class="order_quantity"><label for="quantity">
                ${this.makeSelect(this.data[i].count)}
                    </td>
            <td class="order_price">£ ${(this.data[i].price * this.data[i].count).toFixed(2)}</td>
            <td class="order_delete"><input type="button" class="order_delete" value="×" data-key="deleteItem"></td>
        </tr>`

        }
        this.$table.innerHTML = contents;
        this.totalRender(itemTotal.toFixed(2));
    }

    totalRender(value) {
        let totalDiv = `<span class="total_text">Total</span><span class="total_value">£ ${value}</span>`
        this.$total.innerHTML = totalDiv
    }

    deleteClick(target) {
        const selectedIndex = target.parentElement.parentElement.dataset.index
        //const selectedIndex = this.data.findIndex(product => product.index === target.dataset.index)
        this.data.splice(selectedIndex, 1)
        this.orderRender()

    }

    allClearClick() {
        this.data.splice(0,)
        this.orderRender()
    }

    payButtonClick(target) {


    }

    changeSelectBox(target) {
        let dataindex = target.parentElement.parentElement.parentElement.dataset.index;
        this.changeCount(dataindex, target.value)
    }

    addProduct(selected) { //selected로 받은 데이터를 this.data에 푸쉬
        this.data.push(selected)
        this.orderRender()
    }

    changeCount(index, count) {
        //1씩 증가하는 경우: 같은 아이템을 중복 클릭했을 때 
        //targetValue대로 count가 변해야하는 경우: 셀렉트박스로 수량을 증감시켰을때

        if (!count) { //상품을 클릭했을때, 즉 카운트를 못받을 경우
            if (this.data[index].count == 10) {
                return;
            }
            this.data[index].count++;
        }
        else {
            this.data[index].count = count;
        }
        this.orderRender()
    }
}

export default OrderList

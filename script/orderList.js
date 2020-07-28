class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
        this.$total = document.querySelector('.total')
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


    selected(target) {
        return this.data[this.menuList.selectTab].list[target.dataset.index]
    }

    selectedIndex(target) {
        return this.orderData.findIndex(data => data === this.selected(target))
    }


    menuItemClick(target) {
        //this.orderData//지금은 비어있는배열에 push해서 상품을 넣어준다
        //this.sumValue = this.orderData.map(orderData => orderData.price)
        if (this.selectedIndex(target) === -1) { //숙제 : find함수 말고 다른애로 변경
            const selected = this.selected(target)
            selected.count = 1;
            this.orderData.push(selected)
            this.orderList.setState(this.orderData, selected.count)
            //this.menuData.push({...selected, count:0})
        } else {
            //console.log(this.selectedIndex(target))
            this.orderData[this.selectedIndex(target)].count++;
            this.orderList.setState(this.orderData, this.orderData[this.selectedIndex(target)].count)
            //this.orderList.makeSelect(this.orderData[selectedIndex].count)
        }
        //this.orderList.setState(this.orderData, this.orderData[selectedIndex].count);

        //undefined가 나오면 push를 해주고 아니면 이미 있다는 뜻이니까 push를 해줄 필요가 없음

        console.log()

    }

    deleteClick(target) {
        this.orderData.splice(this.selectedIndex(target), 1)
        this.orderList.setState(this.orderData);

    }

    allClearClick() {
        this.orderData.splice(0,)
        this.sum.splice(0,)
        this.orderList.setState(this.orderData)
    }

    payButtonClick(target) {


    }


    changeSelectBox(target) {
        let dataindex = target.parentElement.parentElement.parentElement.dataset.index;
        this.orderData[dataindex].count = target.value;
        this.orderList.setState(this.orderData)
    }


}

export default OrderList

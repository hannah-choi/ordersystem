class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
        this.$total = document.querySelector('.total')
        this.data = []
        //this.setState(this.data, this.menuData, this.menuList)
        // this.selected = this.menudata[this.menuList.selectTab].list[target.dataset.index];
        // this.selectedIndex = this.menudata.findIndex(data => data === selected) //위와 어떻게 다른가?
    }

    setState(data, menuData, menuList) {
        this.data = data;
        this.menuData = menuData;
        this.menuList = menuList;
        this.orderRender();
    }
    // selected(target) {
    //     return this.menuData[this.menuList.selectTab].list[target.dataset.index]
    // }
    // selectedIndex(target) {
    //     return this.orderData.findIndex(data => data === this.selected(target))
    // }
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

    menuItemClick(target) {
        const selectedList = this.menuData.list.filter(data => data.category === this.menuList.selectTab)
        const selected = selectedList[target.dataset.index]
        const selectedIndex = this.data.findIndex(data => data === selected)
        if (selectedIndex === -1) { //숙제 : find함수 말고 다른애로 변경
            selected.count = 1;
            this.data.push(selected)
            this.setState(this.data, selected.count)
        } else {
            selected.count++;
            this.setState(this.data, this.data[selectedIndex].count)
        }
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

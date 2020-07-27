
class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
        this.$total = document.querySelector('.total')
    }

    setState(data, count) {
        this.data = data;
        this.makeSelect(count);
        this.orderRender(count);
        this.totalRender('0.00');
    }

    makeSelect(count) { //카운트 파라메터를 받아서 i랑 비교할 것 
        let options = ""
        for (let i = 1; i <= 10; i++) {
            options += `<option value="${i}" ${i === count ? "selected" : ""}>${i}</option>`
            //options += `<option value="${i}" ${i === count ? "selected" : ""}>${i}</option>`
        }
        let selectbox = `<select name="quantity" id="quantity">${options}</select>`
        return selectbox
    }

    orderRender(count) {
        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            contents += `<tr data-key="orderedItem" data-index="${i}">
            <td class="order_prod_name">${this.data[i].name}</td>
            <td class="order_quantity"><label for="quantity">
                ${this.makeSelect(count)}
                    </td>
            <td class="order_price">£ ${this.data[i].price.toFixed(2)}</td>
            <td class="order_delete"><input type="button" class="order_delete" value="×" data-key="deleteItem"></td>
        </tr>`
        }
        this.$table.innerHTML = contents;

    }

    totalRender(value) {
        let totalDiv = `<span class="total_text">Total</span><span class="total_value">£ ${value}</span>`
        this.$total.innerHTML = totalDiv
    }
}

export default OrderList

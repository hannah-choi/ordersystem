
class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
        this.$total = document.querySelector('.total')
    }

    setState(data) {
        this.data = data;
        this.orderRender();
        this.makeSelect();
        this.totalRender('0.00');
        this.selectbox = document.getElementById('quantity');
    }

    orderRender() {



        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            contents += `<tr data-key="orderedItem" data-index="${i}">
            <td class="order_prod_name">${this.data[i].name}</td>
            <td class="order_quantity"><label for="quantity">
                ${this.makeSelect()}
                    </td>
            <td class="order_price">£ ${this.data[i].price.toFixed(2)}</td>
            <td class="order_delete"><input type="button" class="order_delete" value="×" data-key="deleteItem"></td>
        </tr>`
        }
        this.$table.innerHTML = contents;

    }


    makeSelect() {

        let options = ""
        for (let i = 1; i <= 10; i++) {
            options += `<option value="${i}">${i}</option>`
        }
        let selectbox = `<select name="quantity" id="quantity">${options}</select>`
        return selectbox
    }

    totalRender(value) {
        let totalDiv = `<span class="total_text">Total</span><span class="total_value">£ ${value}</span>`
        this.$total.innerHTML = totalDiv
    }


}

export default OrderList

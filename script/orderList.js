
class OrderList {

    constructor() {
        this.$table = document.querySelector('.order_table')
    }

    setState(data) {
        this.data = data;
        this.orderRender();
    }

    orderRender() {
        let contents = "";
        for (let i = 0; i < this.data.length; i++) {
            contents += `<tr data-key="orderedItem">
            <td class="order_prod_name">${this.data[i].name}</td>
            <td class="order_quantity"><label for="quantity"><select name="quantity" id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select></td>
            <td class="order_price">£ ${this.data[i].price.toFixed(2)}</td>
            <td class="order_delete"><input type="button" class="order_delete" value="×" data-key="deleteItem"></td>
        </tr>`
        }

        this.$table.innerHTML = contents;
    }
}

export default OrderList

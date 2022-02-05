import { TableItem } from '../../components/tableItem/TableItem';

interface CartClass {
    cartArray: CartObj[] | [];
}

export interface CartObj {
    price: number;
    prodId: number;
    prodName: string;
}

class Cart {
    cartArray: any;
    constructor() {
        this.cartArray = [];
    }

    setCartData(prodId: number, price: number, prodName: string) {
        this.cartArray.push({ price: price, prodId: prodId, prodName: prodName });
        console.log(this.cartArray);
        // this.cartUpdate();
    }

    getCartData() {
        return this.cartArray;
    }
}

export const cart = new Cart();

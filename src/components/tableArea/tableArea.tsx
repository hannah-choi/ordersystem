import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { TableItem } from '../tableItem/TableItem';

// import { cart } from '../../service/cart/Cart';
import { RootState } from '../../store/store';
import { OrderList } from '../orderList/OrderList';

import styles from './TableArea.module.scss';

interface TableAreaProps {
    billType: 'order' | 'cart';
}

export const TableArea: React.FC<TableAreaProps> = ({ billType }) => {
    const cart = useSelector((state: RootState) => state.cart.value);
    const order = useSelector((state: RootState) => state.order.value);

    const tableRef = useRef(null);

    let contents = null;

    if (tableRef.current) {
        if (billType === 'cart') {
            contents = cart.map((prod, i) => (
                <TableItem
                    key={prod.prodId}
                    price={prod.price}
                    prodId={prod.prodId}
                    prodName={prod.prodName}
                    quantity={prod.quantity}
                />
            ));
        } else {
            contents = order.map((item, i) => (
                <OrderList
                    key={item.orderDate}
                    orderDate={item.orderDate}
                    orderNumber={item.orderNumber}
                    orderedItems={item.orderedItem}
                />
            ));
        }
    }

    return (
        <section className={styles.tableArea}>
            <table className={styles.cartTable}>
                <tbody ref={tableRef}>{contents}</tbody>
            </table>
        </section>
    );
};

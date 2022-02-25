import React from 'react';

import { CartObj } from '../../store/cartSlice';

import styles from './OrderList.module.scss';

interface OrderListProps {
    orderDate: string;
    orderNumber: string;
    orderedItems: CartObj[];
    selectOrder: (ordernumber: string) => void;
}

export const OrderList: React.FC<OrderListProps> = ({ orderDate, orderNumber, orderedItems, selectOrder }) => {
    return (
        <tr className={styles.orderList}>
            <td className={styles.orderDate}>{orderDate}</td>
            <td className={styles.orderNumber} onClick={() => selectOrder(orderNumber)}>
                {orderNumber}
            </td>
            <td className={styles.orderTotal}>
                £ {orderedItems.reduce((acc, item) => acc + item.price, 1).toFixed(2)}
            </td>
        </tr>
    );
};

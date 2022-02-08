import React from 'react';
import { useDispatch } from 'react-redux';

import { CartObj, changeCartQuantity, deleteCartItem } from '../../store/cartSlice';

import styles from './OrderList.module.scss';

interface OrderListProps {
    orderDate: string;
    orderNumber: string;
    orderedItems: CartObj[];
}

export const OrderList: React.FC<OrderListProps> = ({ orderDate, orderNumber, orderedItems }) => {
    const dispatch = useDispatch();

    return (
        <tr className={styles.orderList} data-key={orderDate}>
            <td className={styles.orderDate}>{orderDate}</td>
            <td className={styles.orderNumber}>{orderNumber}</td>
            <td className={styles.orderTotal}>{orderedItems.reduce((acc, item) => acc + item.price, 1)}</td>
        </tr>
    );
};

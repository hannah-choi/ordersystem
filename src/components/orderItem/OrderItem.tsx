import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCartQuantity, deleteCartItem } from '../../store/cartSlice';

import styles from './OrderItem.module.scss';

interface OrderItemProps {
    prodId: number;
    price: number;
    prodName: string;
    quantity: number;
    orderDate: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({ orderDate, price, prodId, prodName, quantity }) => {
    const dispatch = useDispatch();
    const getImageName = (name: string, id: number) => {
        return id + '_' + name.split(' ').join('').toLowerCase();
    };

    return (
        <tr className={styles.orderItem} data-id={prodId} data-key={prodId}>
            <tr className={styles.orderDetail} data-key='orderData'>
                <td className={styles.orderDataImage} rowSpan={2}>
                    <img alt={prodName} src={`images/${getImageName(prodName, prodId)}.webp`} />
                </td>
                <td className={styles.orderProdName} colSpan={3}>
                    {prodName}
                </td>
                <td className={styles.prodId}>
                    <label htmlFor='quantity' />
                    {prodId}
                </td>
            </tr>
            <tr className={styles.orderInfo}>
                <td className={styles.price}>£ {price}</td>
                <td className={styles.multiply}> &#215; </td>
                <td className={styles.orderQuantity}>
                    <label htmlFor='quantity' />
                    {quantity}
                </td>
                <td className={styles.total}>£ {(price * quantity).toFixed()}</td>
            </tr>
        </tr>
    );
};

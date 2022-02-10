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

    return (
        <>
            <tr className={styles.orderItem} data-id={prodId} data-key={prodId}>
                <tr className='orderInfo' data-key='prodInfo'>
                    <td className='orderProdName' colSpan='5'>
                        {prodName}
                    </td>
                    <td className='prodId' />
                </tr>
                <tr className='orderDetail' data-key='orderData'>
                    <td className='orderDataImage'>
                        <img src='images/${rows[i].image}.webp' />
                    </td>
                    <td className='orderDataPrice'>£ {price * quantity.toFixed(2)}</td>
                    <td className='orderQuantity'>
                        <label htmlFor='quantity' />
                        {quantity}
                    </td>
                    <td className='orderDate' colSpan='3'>
                        {orderDate}
                    </td>
                </tr>
            </tr>
        </>
    );
};

import React from 'react';

import styles from './OrderItem.module.scss';

interface OrderItemProps {
    prodId: number;
    price: number;
    prodName: string;
    quantity: number;
    prodCode: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({ price, prodCode, prodId, prodName, quantity }) => {
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
                    {prodName.length > 24 ? prodName.slice(0, 24) + ' ...' : prodName}
                </td>
                <td className={styles.prodCode}>{prodCode}</td>
            </tr>
            <tr className={styles.orderInfo}>
                <td className={styles.price}>£ {price.toFixed(2)}</td>
                <td className={styles.multiply}> &#215; </td>
                <td className={styles.orderQuantity}>{quantity}</td>
                <td className={styles.total}>£ {(price * quantity).toFixed(2)}</td>
            </tr>
        </tr>
    );
};

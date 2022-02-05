import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteCartItem } from '../../store/cartSlice';

import styles from './TableItem.module.scss';

interface TableItemProps {
    prodId: number;
    price: number;
    prodName: string;
    quantity: number;
}

export const TableItem: React.FC<TableItemProps> = ({ price, prodId, prodName, quantity }) => {
    const dispatch = useDispatch();
    const optionArray = [...Array(10).keys()];

    return (
        <tr className={styles.tableItem} data-id={prodId} data-key={prodId}>
            <td className={styles.cartProdName}>{prodName}</td>
            <td className={styles.cartQuantity}>
                <label htmlFor='quantity' />
                <select data-key='selectbox' id='quantity' name='quantity' value={quantity}>
                    {optionArray.map((num) => (
                        <option key={Math.random()} value={num + 1}>
                            {num + 1}
                        </option>
                    ))}
                </select>
            </td>
            <td className={styles.cartPrice}>£ {price.toFixed(2)}</td>
            <td className={styles.cartDelete}>
                <input data-key='deleteItem' type='button' value='×' onClick={() => dispatch(deleteCartItem(prodId))} />
            </td>
        </tr>
    );
};

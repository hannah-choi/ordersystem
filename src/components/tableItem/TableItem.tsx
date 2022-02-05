import React from 'react';

interface TableItemProps {
    prodId: number;
    price: number;
    prodName: string;
    select: number;
    quantity: number;
}

import styles from './TableItem.module.scss';

export const TableItem: React.FC<TableItemProps> = ({ price, prodId, prodName, quantity }) => {
    const optionArray = [...Array(10).keys()];

    return (
        <tr className={styles.tableItem} data-id={prodId} data-key={prodId}>
            <td className={styles.cartProdName}>{prodName}</td>
            <td className={styles.cartQuantity}>
                <label htmlFor='quantity' />
                <select data-key='selectbox' id='quantity' name='quantity' value={quantity}>
                    {optionArray.map((num, i) => (
                        <option key={Math.random()} value={num + 1}>
                            {num + 1}
                        </option>
                    ))}
                </select>
            </td>
            <td className={styles.cartPrice}>£ {price.toFixed(2)}</td>
            <td className={styles.cartDelete}>
                <input data-key='deleteItem' type='button' value='×' />
            </td>
        </tr>
    );
};

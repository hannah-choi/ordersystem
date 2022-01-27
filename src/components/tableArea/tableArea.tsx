import React from 'react';

interface TableAreaProps {
    // : string;
}

import styles from './tableArea.module.scss';

export const TableArea: React.FC<TableAreaProps> = ({}) => {
    const data = [];

    return (
        <section className={styles.tableArea}>
            <table className={styles.cartTable}>
                <tr data-id='${this.data[i].id}' data-index='${i}' data-key='cartItem'>
                    <td className='cartProdName'>Alishan Jingsyuan</td>
                    <td className='cartQuantity'>
                        <label htmlFor='quantity' />
                        <select data-key='selectbox' id='quantity' name='quantity'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                    </td>
                    <td className='cartPrice'>£ 18.00</td>
                    <td className='cartDelete'>
                        <input className='cartdelete' data-key='deleteItem' type='button' value='×' />
                    </td>
                </tr>
            </table>
        </section>
    );
};

import React, { useEffect } from 'react';

import { TableItem } from '../tableItem/TableItem';

import styles from './tableArea.module.scss';

interface TableAreaProps {
    contents: [];
}

export const TableArea: React.FC<TableAreaProps> = ({ contents }) => {
    // useEffect(() => {
    //     console.log(cartArray);
    //     contents = cartArray.map((prod, i) => (
    //         <TableItem key={prod.prodId} price={prod.price} prodId={prod.prodId} prodName={prod.prodName} />
    //     ));
    // }, [cartArray]);

    return (
        <section className={styles.tableArea}>
            <table className={styles.cartTable}>
                <tbody>{contents}</tbody>
            </table>
        </section>
    );
};

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TableItem } from '../tableItem/TableItem';

// import { cart } from '../../service/cart/Cart';
import { RootState } from '../../store/store';

import styles from './tableArea.module.scss';

interface TableAreaProps {}

export const TableArea: React.FC<TableAreaProps> = ({}) => {
    const cart = useSelector((state: RootState) => state.cart.value);

    const tableRef = useRef(null);

    let contents = null;

    if (tableRef.current) {
        contents = cart.map((prod, i) => (
            <TableItem
                key={prod.prodId}
                price={prod.price}
                prodId={prod.prodId}
                prodName={prod.prodName}
                quantity={prod.quantity}
            />
        ));
    }

    return (
        <section className={styles.tableArea}>
            <table className={styles.cartTable}>
                <tbody ref={tableRef}>{contents}</tbody>
            </table>
        </section>
    );
};

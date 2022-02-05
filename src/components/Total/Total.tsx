import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

import styles from './Total.module.scss';

interface TotalProps {}

const Total: React.FC<TotalProps> = ({}) => {
    const cart = useSelector((state: RootState) => state.cart.value);
    const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);

    return (
        <section className={styles.total}>
            <span className='totalText'>Total</span>
            <span className='totalValue'>£ {total}</span>
        </section>
    );
};

export default Total;

import React from 'react';

import styles from './Total.module.scss';

interface TotalProps {}

const Total: React.FC<TotalProps> = ({}) => {
    return (
        <section className={styles.total}>
            <span className='totalText'>Total</span>
            <span className='totalValue'>£ 000</span>
        </section>
    );
};

export default Total;

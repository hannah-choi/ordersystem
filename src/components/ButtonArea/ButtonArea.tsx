import React from 'react';

interface ButtonAreaProps {
    payButtonClick: () => void;
    viewOrderHistory: () => void;
}

import styles from './ButtonArea.module.scss';

const ButtonArea: React.FC<ButtonAreaProps> = ({ payButtonClick, viewOrderHistory }) => {
    return (
        <section className={styles.buttonArea}>
            <input data-key='orderButton' type='button' value='PLACE ORDER' onClick={payButtonClick} />
            <div className={styles.orderDataDiv}>
                <input data-key='getOrderDataButton' type='button' value='ORDER HISTORY' onClick={viewOrderHistory} />
            </div>
        </section>
    );
};

export default ButtonArea;

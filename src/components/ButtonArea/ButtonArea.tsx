import React from 'react';

interface ButtonAreaProps {
    // : string;
}

import styles from './ButtonArea.module.scss';

const ButtonArea: React.FC<ButtonAreaProps> = ({}) => {
    return (
        <section className={styles.buttonArea}>
            <input data-key='orderButton' type='button' value='PLACE ORDER' />
            <div className={styles.orderDataDiv}>
                <input data-key='getOrderDataButton' type='button' value='ORDER HISTORY' />
            </div>
        </section>
    );
};

export default ButtonArea;

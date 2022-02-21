import React from 'react';

interface ButtonAreaProps {
    payButtonClick?: () => void;
    viewOrderHistory?: () => void;
    backToCart?: () => void;
    billType: 'cart' | 'order' | 'orderDetail';
}

import styles from './ButtonArea.module.scss';

const ButtonArea: React.FC<ButtonAreaProps> = ({ backToCart, billType, payButtonClick, viewOrderHistory }) => {
    return (
        <section className={styles.buttonArea}>
            {billType === 'cart' && (
                <>
                    <input data-key='orderButton' type='button' value='PLACE ORDER' onClick={payButtonClick} />
                    <input
                        data-key='getOrderDataButton'
                        type='button'
                        value='ORDER HISTORY'
                        onClick={viewOrderHistory}
                    />
                </>
            )}
            {billType === 'order' && (
                <>
                    <input data-key='orderButton' type='button' value='BACK TO CART' onClick={backToCart} />
                </>
            )}
            {billType === 'orderDetail' && (
                <>
                    <input
                        data-key='orderButton'
                        type='button'
                        value='BACK TO ORDER HISTORY'
                        onClick={viewOrderHistory}
                    />
                    <input data-key='getOrderDataButton' type='button' value='BACK TO CART' onClick={backToCart} />
                </>
            )}
        </section>
    );
};

export default ButtonArea;

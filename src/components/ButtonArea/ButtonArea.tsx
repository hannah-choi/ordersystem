import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { setBill } from '../../store/billSlice';

interface ButtonAreaProps {
    payButtonClick?: () => void;
}

import styles from './ButtonArea.module.scss';

const ButtonArea: React.FC<ButtonAreaProps> = ({ payButtonClick }) => {
    const dispatch = useDispatch();
    const bill = useSelector((state: RootState) => state.bill.type);

    return (
        <section className={styles.buttonArea}>
            {bill === 'cart' && (
                <>
                    <input data-key='orderButton' type='button' value='PLACE ORDER' onClick={payButtonClick} />
                    <input
                        data-key='getOrderDataButton'
                        type='button'
                        value='ORDER HISTORY'
                        onClick={() => dispatch(setBill('order'))}
                    />
                </>
            )}
            {bill === 'order' && (
                <>
                    <input
                        data-key='orderButton'
                        type='button'
                        value='BACK TO CART'
                        onClick={() => dispatch(setBill('cart'))}
                    />
                </>
            )}
            {bill === 'orderDetail' && (
                <>
                    <input
                        data-key='orderButton'
                        type='button'
                        value='BACK TO ORDER HISTORY'
                        onClick={() => dispatch(setBill('order'))}
                    />
                    <input
                        data-key='getOrderDataButton'
                        type='button'
                        value='BACK TO CART'
                        onClick={() => dispatch(setBill('cart'))}
                    />
                </>
            )}
        </section>
    );
};

export default ButtonArea;

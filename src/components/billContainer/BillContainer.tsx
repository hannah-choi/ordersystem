import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonArea from '../buttonArea/ButtonArea';
import { TableArea } from '../tableArea/TableArea';
import Total from '../Total/Total';
import { allClear } from '../../store/cartSlice';
import { setOrder } from '../../store/orderSlice';
import { RootState } from '../../store/store';

import styles from './BillContainer.module.scss';

interface BillContainerProps {}

const BillContainer: React.FC<BillContainerProps> = ({}) => {
    const [billType, setBillType] = useState('cart');
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.value);
    const order = useSelector((state: RootState) => state.order.value);

    const payButtonClick = () => {
        //렌더해서 리스트 만들기
        alert('pay');
        const orderNumber = 'JSY' + (Math.random() * 100).toString();
        const orderDate = getTime();
        const orderedItem = cart;

        dispatch(setOrder({ orderDate, orderNumber, orderedItem }));
        console.log(order);
    };

    const getTime = () => {
        //서비스로 따로 뺼것
        let userDate = new Date();
        const offset = userDate.getTimezoneOffset();
        userDate = new Date(userDate.getTime() + offset * 60 * 1000);
        return userDate.toISOString().split('T')[0];
    };

    const viewOrderHistory = () => {
        setBillType('order');
        console.log('order');
    };

    return (
        <section className={styles.billContainer}>
            {billType === 'cart' && (
                <>
                    <header>
                        <h2 id='billTitle'>SHOPPING CART</h2>
                        <span className={styles.deleteIcon}>
                            <img alt='Clear the cart' src='/images/rubbish.png' onClick={() => dispatch(allClear())} />
                        </span>
                    </header>
                    <TableArea billType={billType} />
                    <Total />
                    <ButtonArea payButtonClick={payButtonClick} viewOrderHistory={viewOrderHistory} />
                </>
            )}
            {billType === 'order' && (
                <>
                    <header>
                        <h2 id='billTitle'>ORDER HISTORY</h2>
                    </header>
                    <TableArea billType={billType} />
                    <ButtonArea payButtonClick={payButtonClick} />
                </>
            )}
        </section>
    );
};

export default BillContainer;

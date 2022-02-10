import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonArea from '../buttonArea/ButtonArea';
import { TableArea } from '../tableArea/TableArea';
import Total from '../Total/Total';
import { allClear } from '../../store/cartSlice';
import { setOrder } from '../../store/orderSlice';
import { RootState } from '../../store/store';
import { TableItem } from '../tableItem/TableItem';
import { OrderList } from '../orderList/OrderList';
import { OrderItem } from '../orderItem/OrderItem';

import styles from './BillContainer.module.scss';

interface BillContainerProps {}

const BillContainer: React.FC<BillContainerProps> = ({}) => {
    const [billType, setBillType] = useState('cart');
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.value);
    const order = useSelector((state: RootState) => state.order.value);

    const [selectedOrder, setSelectedOrder] = useState(null);

    const payButtonClick = () => {
        //렌더해서 리스트 만들기
        alert('pay');
        const orderNumber = 'JSY' + (Math.random() * 100).toString();
        const orderDate = getTime();
        const orderedItem = cart;

        dispatch(setOrder({ orderDate, orderNumber, orderedItem }));
        dispatch(allClear);
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

    const selectOrder = (orderNumber: string) => {
        console.log(orderNumber);
        const picked = order.find((item) => item.orderNumber === orderNumber);
        console.log(picked);
        setSelectedOrder(picked);
        setBillType('orderDetail');
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
                    <TableArea>
                        {cart.map((prod) => (
                            <TableItem
                                key={prod.prodId}
                                price={prod.price}
                                prodId={prod.prodId}
                                prodName={prod.prodName}
                                quantity={prod.quantity}
                            />
                        ))}
                    </TableArea>
                    <Total />
                    <ButtonArea payButtonClick={payButtonClick} viewOrderHistory={viewOrderHistory} />
                </>
            )}
            {billType === 'order' && (
                <>
                    <header>
                        <h2 id='billTitle'>ORDER HISTORY</h2>
                    </header>
                    <TableArea>
                        {order.map((item) => (
                            <OrderList
                                key={item.orderDate}
                                orderDate={item.orderDate}
                                orderNumber={item.orderNumber}
                                orderedItems={item.orderedItem}
                                selectOrder={selectOrder}
                            />
                        ))}
                    </TableArea>
                    <ButtonArea payButtonClick={payButtonClick} />
                </>
            )}
            {billType === 'orderDetail' && (
                <>
                    <header>
                        <h2 id='billTitle'>ORDER DETAIL</h2>
                    </header>
                    <TableArea>
                        <thead>
                            <th>Name</th>
                            <th>Quantity</th>
                        </thead>

                        {selectedOrder.orderedItem.map((item, i) => (
                            <OrderItem
                                key={item.prodId}
                                orderDate={selectedOrder.orderDate}
                                price={item.price}
                                prodId={item.prodId}
                                quantity={item.quantity}
                            />
                        ))}
                    </TableArea>
                </>
            )}
        </section>
    );
};

export default BillContainer;

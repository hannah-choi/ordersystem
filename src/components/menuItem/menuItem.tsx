import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { cart } from '../../service/cart/Cart';
import { setCartItem } from '../../store/cartSlice';
import { RootState } from '../../store/store';

import styles from './menuItem.module.scss';

interface MenuItemProps {
    prodName: string;
    prodId: number;
    imageName: string;
    price: number;
    // listItemClick: (id: number, name: string, price: number) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ imageName, price, prodId, prodName }) => {
    const cart = useSelector((state: RootState) => state.cart.value);
    const dispatch = useDispatch();

    return (
        <li
            key={prodId}
            className={styles.menuItem}
            data-key='menuItem'
            onClick={() => {
                dispatch(setCartItem({ price, prodId, prodName }));
            }}
        >
            <img alt={prodName} data-id={prodId} data-key='menuItem' src={`/images/${imageName}.webp`} />
            <span className={styles.prodName}>{prodName}</span>
            <span className={styles.prodPrice}>£ {price.toFixed(2)}</span>
        </li>
    );
};

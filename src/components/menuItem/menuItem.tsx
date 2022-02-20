import * as React from 'react';
import { useDispatch } from 'react-redux';

// import { cart } from '../../service/cart/Cart';
import { setCartItem } from '../../store/cartSlice';

import styles from './MenuItem.module.scss';

interface MenuItemProps {
    prodName: string;
    prodId: number;
    imageName: string;
    price: number;
    prodCode: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ imageName, price, prodCode, prodId, prodName }) => {
    const dispatch = useDispatch();

    return (
        <li
            key={prodId}
            className={styles.menuItem}
            data-key='menuItem'
            onClick={() => {
                dispatch(setCartItem({ price, prodCode, prodId, prodName, quantity: 1 }));
            }}
        >
            <div className={styles.img}>
                <img alt={prodName} src={`/images/${imageName}.webp`} />
            </div>
            <span className={styles.prodName}>{prodName}</span>
            <span className={styles.prodPrice}>£ {price.toFixed(2)}</span>
        </li>
    );
};

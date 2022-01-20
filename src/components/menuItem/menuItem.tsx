import * as React from 'react';

import styles from './menuItem.module.scss';

interface MenuItemProps {
    prodName: string;
    prodId: number;
    imageName: string;
    price: number;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ imageName, price, prodId, prodName }) => {
    return (
        <li key={prodId} className={styles.menuItem} data-key='menuItem'>
            <img alt={prodName} data-id={prodId} data-key='menuItem' src={`/images/${imageName}.webp`} />
            <span className={styles.prodName}>{prodName}</span>
            <span className={styles.prodPrice}>£ {price.toFixed(2)}</span>
        </li>
    );
};

export default MenuItem;

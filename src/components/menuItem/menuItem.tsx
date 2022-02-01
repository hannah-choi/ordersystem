import * as React from 'react';

import styles from './menuItem.module.scss';

interface MenuItemProps {
    prodName: string;
    prodId: number;
    imageName: string;
    price: number;
    listItemClick: (id: number, name: string, price: number) => void;
}

export const MenuItem: React.FunctionComponent<MenuItemProps> = ({
    imageName,
    listItemClick,
    price,
    prodId,
    prodName
}) => (
    <li
        key={prodId}
        className={styles.menuItem}
        data-key='menuItem'
        onClick={() => listItemClick(prodId, prodName, price)}
    >
        <img alt={prodName} data-id={prodId} data-key='menuItem' src={`/images/${imageName}.webp`} />
        <span className={styles.prodName}>{prodName}</span>
        <span className={styles.prodPrice}>£ {price.toFixed(2)}</span>
    </li>
);

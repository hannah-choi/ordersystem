import * as React from 'react';

import { menuData } from '../../data/data';

interface MenuItemProps {
    prodName: string;
    prodId: number;
    imageName: string;
    price: number;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ imageName, price, prodId, prodName }) => {
    return (
        <li key={prodId} data-key='menuItem'>
            <img alt={prodName} data-id={prodId} data-key='menuItem' src={`/images/${imageName}.webp`} />
            <span className='prodName'>{prodName}</span>
            <span className='prodPrice'>£ {price.toFixed(2)}</span>
        </li>
    );
};

export default MenuItem;

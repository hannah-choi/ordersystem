import * as React from 'react';

import Header from '../header/Header';
import MenuList from '../menuList/MenuList';
import MenuNav from '../menuNav/menuNav';

import styles from './MenuContainer.module.scss';

interface MenuContainerProps {
    listItemClick: (id: number, name: string, price: number) => void;
}

const MenuContainer: React.FC<MenuContainerProps> = ({ listItemClick }) => (
    <div className={styles.menuContainer}>
        <Header />
        <MenuNav />
        <MenuList categoryNo={0} listItemClick={listItemClick} />
    </div>
);
export default MenuContainer;

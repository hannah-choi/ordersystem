import React from 'react';

import Header from '../header/Header';
import MenuList from '../menuList/MenuList';
import MenuNav from '../menuNav/MenuNav';

import styles from './MenuContainer.module.scss';

const MenuContainer: React.FC = () => (
    <div className={styles.menuContainer}>
        <Header />
        <MenuNav />
        <MenuList />
    </div>
);
export default MenuContainer;

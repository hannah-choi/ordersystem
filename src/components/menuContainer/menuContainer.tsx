import * as React from 'react';

import Header from '../header/Header';
import MenuList from '../menuList/MenuList';
import MenuNav from '../menuNav/MenuNav';

import styles from './MenuContainer.module.scss';

interface MenuContainerProps {}

const MenuContainer: React.FC<MenuContainerProps> = ({}) => (
    <div className={styles.menuContainer}>
        <Header />
        <MenuNav />
        <MenuList categoryNo={0} />
    </div>
);
export default MenuContainer;

import * as React from 'react';

import Header from '../header/Header';
import MenuList from '../menuList/MenuList';
import MenuNav from '../menuNav/menuNav';

import styles from './MenuContainer.module.scss';

const MenuContainer: React.FC = () => (
    <div className={styles.menuContainer}>
        <Header />
        <MenuNav />
        {/* <main className='menuArea'> */}
        {/* <nav className='menuNav'>
                <ul className='ulNav' />
            </nav> */}
        <MenuList categoryNo={0} />
        {/* </main> */}
    </div>
);
export default MenuContainer;

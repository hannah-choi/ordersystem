import * as React from 'react';

import Header from '../header/Header';
import MenuNav from '../menuNav/menuNav';

import styles from './MenuContainer.module.scss';

const MenuContainer: React.FC = () => (
    <div className={styles.menuContainer}>
        <Header />
        <main className='menuArea'>
            {/* <nav className='menuNav'>
                <ul className='ulNav' />
            </nav> */}
            <MenuNav />
            {/* menuList */}
        </main>
    </div>
);
export default MenuContainer;

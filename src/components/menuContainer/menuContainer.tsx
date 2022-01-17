import * as React from 'react';

import Header from '../header/Header';

import styles from './MenuContainer.module.scss';

const MenuContainer: React.FC = () => (
    <div className={styles.menuContainer}>
        <Header />
        <main className='menuArea'>
            <nav className='menuNav'>
                <ul className='ulNav' />
            </nav>
            {/* menuList */}
        </main>
    </div>
);
export default MenuContainer;

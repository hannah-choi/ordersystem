import * as React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <header className={styles.header}>
            <img alt='logo' src='./images/logo.png' />
        </header>
    );
};

export default Header;

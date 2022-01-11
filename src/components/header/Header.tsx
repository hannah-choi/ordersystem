import * as React from 'react';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return (
        <header className='header'>
            <img src='images/logo.png' />
        </header>
    );
};

export default Header;

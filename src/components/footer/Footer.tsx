import * as React from 'react';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <>
            <p className='secondary'>© 2020 Hannah Choi</p>
            <a
                className='git_link'
                href='https://github.com/hannah-developer/ordersystem'
                rel='noopener noreferrer'
                target='_blank'
            >
                <img src='images/github_black.png' />
                GITHUB REPO
            </a>
        </>
    );
};

export default Footer;

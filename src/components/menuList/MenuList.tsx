import * as React from 'react';

interface IMenuListProps {}

const MenuList: React.FunctionComponent<IMenuListProps> = (props) => {
    return (
        <ul className='menuList' id='menu'>
            <li>
                <img src='https://shoplineimg.com/5cee0a99c4efc60001a5fe6b/5d6244e1622a563c02a2b3fd/800x.webp?source_format=png' />
                <span className='prod_name'>Si Ji Chun</span>
                <span className='prod_price'>17.00</span>
            </li>
        </ul>
    );
};

export default MenuList;

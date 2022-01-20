import * as React from 'react';

import { menuData } from '../../data/data';
import MenuItem from '../menuItem/menuItem';

import styles from './MenuList.module.scss';

interface MenuListProps {
    categoryNo: number;
}

const MenuList: React.FunctionComponent<MenuListProps> = ({ categoryNo = 0 }) => {
    const data = menuData.list.filter((item) => item.category === categoryNo); //선택한 카테고리의 아이템만 거른다
    const getImageName = (name: string, id: number) => {
        console.log(id + '_' + name.split(' ').join('').toLowerCase());
        return id + '_' + name.split(' ').join('').toLowerCase();
    };

    return (
        <ul className={styles.menuList} id='menu'>
            {data.map((prod) => (
                <MenuItem
                    key={prod.id}
                    imageName={getImageName(prod.name, prod.id)}
                    price={prod.price}
                    prodId={prod.id}
                    prodName={prod.name}
                />
            ))}
        </ul>
    );
};

export default MenuList;

import * as React from 'react';
import { useSelector } from 'react-redux';

import { menuData } from '../../data/data';
import { MenuItem } from '../menuItem/MenuItem';
import { RootState } from '../../store/store';

import styles from './MenuList.module.scss';

const MenuList: React.FC<MenuListProps> = () => {
    const categoryNo = useSelector((state: RootState) => state.menu.active);
    const data = menuData.list.filter((item) => item.category === categoryNo); //선택한 카테고리의 아이템만 거른다
    const getImageName = (name: string, id: number) => {
        return id + '_' + name.split(' ').join('').toLowerCase();
    };

    return (
        <ul className={styles.menuList} id='menu'>
            {data.map((prod) => (
                <MenuItem
                    key={prod.id}
                    imageName={getImageName(prod.name, prod.id)}
                    price={prod.price}
                    prodCode={prod.code}
                    prodId={prod.id}
                    prodName={prod.name}
                />
            ))}
        </ul>
    );
};

export default MenuList;

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMenu } from '../../store/menuSlice';
import { RootState } from '../../store/store';

import styles from './MenuNav.module.scss';

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = (props) => {
    const dispatch = useDispatch();
    const activeMenu = useSelector((state: RootState) => state.menu.active);

    const MENU_DATA = ['LOOSE LEAF', 'TEA BAGS', 'GIFT SET'];

    return (
        <ul className={styles.menuNav}>
            {MENU_DATA.map((menu, i) => (
                <li
                    key={menu}
                    className={activeMenu === i ? styles.selected : ''}
                    data-key='navItem'
                    onClick={() => dispatch(setMenu(i))}
                >
                    {menu}
                </li>
            ))}
        </ul>
    );
};

export default MenuNav;

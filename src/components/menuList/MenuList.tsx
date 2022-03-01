import { NONAME } from 'dns';

import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { menuData } from '../../data/data';
import { MenuItem } from '../menuItem/MenuItem';
import { RootState } from '../../store/store';

import styles from './MenuList.module.scss';

const MenuList: React.FC = () => {
    const categoryNo = useSelector((state: RootState) => state.menu.active);
    const data = menuData.list.filter((item) => item.category === categoryNo); //선택한 카테고리의 아이템만 거른다
    const getImageName = (name: string, id: number) => {
        return id + '_' + name.split(' ').join('').toLowerCase();
    };

    const bill = useSelector((state: RootState) => state.bill.type);

    const variants = {
        hide: { display: 'none', opacity: 0 },
        show: { display: 'block', opacity: 1 }
    };

    return (
        <>
            <ul className={styles.menuList} id='menu'>
                <motion.div
                    animate={bill !== 'cart' ? 'show' : 'hide'}
                    className={styles.wrapper}
                    initial={{ display: 'none', opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    variants={variants}
                >
                    <p className={styles.message}>To order, please go back to the cart</p>
                </motion.div>
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
        </>
    );
};

export default MenuList;

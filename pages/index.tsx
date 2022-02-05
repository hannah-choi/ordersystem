import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import styles from '../styles/Home.module.scss';
import Footer from '../src/components/footer/Footer';
import MenuContainer from '../src/components/menuContainer/MenuContainer';
import BillContainer from '../src/components/billContainer/BillContainer';
import { TableItem } from '../src/components/tableItem/TableItem';

import type { NextPage } from 'next';

const Home: NextPage = () => {
    // const listItemClick = (id: number, name: string, price: number) => {
    //     cartArray.push({ price: price, prodId: id, prodName: name });
    //     cart.setCartData(id, price, name);
    // };

    return (
        <>
            <div className={styles.wrapper}>
                <MenuContainer />
                <BillContainer />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Home;

import styles from '../styles/Home.module.scss';
import Footer from '../src/components/footer/Footer';
import MenuContainer from '../src/components/menuContainer/MenuContainer';
import BillContainer from '../src/components/billContainer/BillContainer';
import { TableItem } from '../src/components/tableItem/TableItem';

import type { NextPage } from 'next';

export interface Cart {
    price: number;
    prodId: number;
    prodName: string;
}

const Home: NextPage = () => {
    const cartArray: Cart[] = [];
    let contents = [];
    const listItemClick = (id: number, name: string, price: number) => {
        cartArray.push({ price: price, prodId: id, prodName: name });
        contents = cartArray.map((prod, i) => (
            <TableItem key={prod.prodId} price={prod.price} prodId={prod.prodId} prodName={prod.prodName} />
        ));
        console.log(contents);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <MenuContainer listItemClick={listItemClick} />
                <BillContainer contents={contents} />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Home;

import styles from '../styles/Home.module.scss';
import Footer from '../src/components/footer/Footer';
import MenuContainer from '../src/components/menuContainer/MenuContainer';
import BillContainer from '../src/components/billContainer/BillContainer';

import type { NextPage } from 'next';

const Home: NextPage = () => {
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

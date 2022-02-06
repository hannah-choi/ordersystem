import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import ButtonArea from '../buttonArea/ButtonArea';
import { TableArea } from '../tableArea/TableArea';
import Total from '../Total/Total';
import { allClear } from '../../store/cartSlice';

import styles from './BillContainer.module.scss';

interface BillContainerProps {}

const BillContainer: React.FC<BillContainerProps> = ({}) => {
    const dispatch = useDispatch();

    return (
        <section className={styles.billContainer}>
            <header>
                <h2 id='billTitle'>SHOPPING CART</h2>
                <span className={styles.deleteIcon}>
                    <img alt='Clear the cart' src='/images/rubbish.png' onClick={() => dispatch(allClear())} />
                </span>
            </header>
            <TableArea />
            <Total />
            <ButtonArea />
        </section>
    );
};

export default BillContainer;

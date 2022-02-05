import * as React from 'react';

import ButtonArea from '../buttonArea/ButtonArea';
import { TableArea } from '../tableArea/TableArea';
import Total from '../Total/Total';
import { Cart } from '../../../pages/index';

import styles from './BillContainer.module.scss';

interface BillContainerProps {}

const BillContainer: React.FC<BillContainerProps> = ({}) => {
    return (
        <section className={styles.billContainer}>
            <header>
                <h2 id='billTitle'>SHOPPING CART</h2>
                <span className={styles.deleteIcon}>
                    <i className='far fa-trash-alt' data-key='trashIcon' />
                </span>
            </header>
            <TableArea />
            <Total />
            <ButtonArea />
        </section>
    );
};

export default BillContainer;

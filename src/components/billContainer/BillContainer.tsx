import * as React from 'react';

import ButtonArea from '../ButtonArea/ButtonArea';
import { TableArea } from '../tableArea/tableArea';
import Total from '../Total/Total';

import styles from './BillContainer.module.scss';

interface BillContainerProps {}

const BillContainer: React.FunctionComponent<BillContainerProps> = (props) => {
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

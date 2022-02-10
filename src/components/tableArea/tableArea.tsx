import React, { useRef } from 'react';

import styles from './TableArea.module.scss';

interface TableAreaProps {
    setBillType?: () => void;
    children: ReactNode;
}

export const TableArea: React.FC<TableAreaProps> = ({ children }) => {
    const tableRef = useRef(null);
    return (
        <section className={styles.tableArea}>
            <table ref={tableRef} className={styles.cartTable}>
                {children}
            </table>
        </section>
    );
};

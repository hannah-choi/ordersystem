import React from 'react';

interface TableItemProps {
    prodId: number;
    price: number;
    prodName: string;
}

export const TableItem: React.FC<TableItemProps> = ({ price, prodId, prodName }) => {
    return (
        <tr data-id='${this.data[i].id}' data-index='${i}' data-key={prodId}>
            <td className='cartProdName'>{prodName}</td>
            <td className='cartQuantity'>
                <label htmlFor='quantity' />
                <select data-key='selectbox' id='quantity' name='quantity'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </td>
            <td className='cartPrice'>£ {price.toFixed(2)}</td>
            <td className='cartDelete'>
                <input className='cartdelete' data-key='deleteItem' type='button' value='×' />
            </td>
        </tr>
    );
};

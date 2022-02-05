import React from 'react';

interface TableItemProps {
    prodId: number;
    price: number;
    prodName: string;
    select: number;
}

export const TableItem: React.FC<TableItemProps> = ({ price, prodId, prodName, select = 1 }) => {
    const optionArray = [...Array(10).keys()];

    return (
        <tr data-id='${this.data[i].id}' data-index='${i}' data-key={prodId}>
            <td className='cartProdName'>{prodName}</td>
            <td className='cartQuantity'>
                <label htmlFor='quantity' />
                <select data-key='selectbox' id='quantity' name='quantity' value={select}>
                    {optionArray.map((num, i) => (
                        <option key={Math.random()} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </td>
            <td className='cartPrice'>£ {price.toFixed(2)}</td>
            <td className='cartDelete'>
                <input className='cartdelete' data-key='deleteItem' type='button' value='×' />
            </td>
        </tr>
    );
};

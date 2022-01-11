import * as React from 'react';

interface BillContainerProps {}

const BillContainer: React.FunctionComponent<BillContainerProps> = (props) => {
    return (
        <div className='billContainer'>
            <header id='billHeader'>
                <h2 id='billTitle'>SHOPPING CART</h2>
                <span className='deleteIcon'>
                    <i className='far fa-trash-alt' data-key='trashIcon' />
                </span>
            </header>
            <section id='tableArea' />
            <div className='total' data-key='total' />
            <div id='buttonArea'>
                <input data-key='orderButton' id='orderButton' type='button' value='PLACE ORDER' />
                <div id='orderDataDiv'>
                    <input data-key='getOrderDataButton' id='getOrderDataButton' type='button' value='ORDER HISTORY' />
                </div>
            </div>
        </div>
    );
};

export default BillContainer;

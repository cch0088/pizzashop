import React from 'react';

function ListOrder({type, toppings}) {
    return(
        <div className="order-content">
            <ul>
                <ol>Type: {type}</ol>
                <ol>Toppings: {toppings}</ol>
            </ul>
        </div>
    )
}

export default ListOrder;
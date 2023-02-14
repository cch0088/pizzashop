import React from 'react';

function ListOrder({type, toppings}) {
    return(
        <div className="content">
            <p>Type: {type}</p>
            <p>Toppings: {toppings}</p>
        </div>
    )
}

export default ListOrder;
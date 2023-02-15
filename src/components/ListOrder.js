import React from 'react';

function ListOrder({type, toppings}) {
    return(
        <div className="order-content">
            <div className="center">
            <ul className="div-box">
                <ol className="order-info">Order Info</ol>
                <ol className="center">Type: {type}</ol>
                <ol className="center">Toppings: {toppings}</ol>
            </ul>
            </div>
        </div>
    )
}

export default ListOrder;
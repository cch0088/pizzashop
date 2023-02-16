import React from 'react';

function ListOrder({type, toppings, id}) {
    return(
        <div className="order-content">
            <div className="div-box">
                <div className="order-info">Order Info</div>
                <div className="center">Type: {type}</div>
                <div className="center">Toppings: {toppings}</div>
                <div className="center">Order number: {id}</div>
            </div>
        </div>
    )
}

export default ListOrder;
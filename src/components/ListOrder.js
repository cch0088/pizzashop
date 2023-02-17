import React from 'react';

function ListOrder({type, toppings, id}) {
    return(
        <div className="order-content">
            <div className="div-box">
                <div className="order-info">{type.charAt(0).toUpperCase() + type.slice(1)} Pizza</div>
                <div className="center-left">
                    <ul>{toppings.map((topping, index) => {
                        return <li key={index}>{topping.charAt(0).toUpperCase() + topping.slice(1)}</li>})}
                    </ul>
                </div>
                <div className="center">{(!id ? "Order pending" : "Order #" + id)}</div>
            </div>
        </div>
    )
}

export default ListOrder;
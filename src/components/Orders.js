import React from 'react';
import ListOrder from './ListOrder';

function Orders({orders}) {

    return(
        <div>
            <h1 className="order-title">Your Recent Orders</h1>
            {orders.map((order, index) => {
                return <ListOrder 
                key={index}
                {...order}
                />
            })}
        </div>
    )
}

export default Orders;
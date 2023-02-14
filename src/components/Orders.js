import React from 'react';
import ListOrder from './ListOrder';

function Orders({orders}) {

    return(
        <div>
            <h1 className="order-title">Recent Orders</h1>
            <ul>
            {orders.map(order => {
                return <ListOrder 
                key={order.id}
                {...order}
                />
            })}
            </ul>
        </div>
    )
}

export default Orders;
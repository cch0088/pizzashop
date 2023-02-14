import React from 'react';
import ListOrder from './ListOrder';

function Orders({orders}) {

    return(
        <div>
            {orders.map(order => {
                return <ListOrder 
                key={order.id}
                {...order}
                />
            })}
        </div>
    )
}

export default Orders;
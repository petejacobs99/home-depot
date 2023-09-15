import React from 'react';
import OrderListItem from '../OrderListItem/OrderListItem'; // Import OrderListItem

export default function OrderList({ orders }) {
  return (
    <div>
      {orders.map(order => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </div>
  );
}
//


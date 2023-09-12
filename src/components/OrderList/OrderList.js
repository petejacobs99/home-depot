import OrderListItem from '../OrderListItem/OrderListItem';

export default function OrderList({ orders }) {
  return (
    <div>
      {orders.map(order => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </div>
  );
}


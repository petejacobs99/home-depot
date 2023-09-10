export default function OrderListItem({ order }) {
  return (
    <div>
      <h2>Order ID: {order.id}</h2>
      <p>Date: {order.date}</p>
      <p>Total: {order.total}</p>
      <ul>
        {order.items.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}


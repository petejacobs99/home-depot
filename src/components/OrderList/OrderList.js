import React, { useState, useEffect } from 'react';
import { getPreviousOrders } from '../../utilities/orders-api';
import OrderListItem from './OrderListItem'

export default function OrderHistory() {
  const [previousOrders, setPreviousOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch previous orders when the component mounts
    async function fetchPreviousOrders() {
      try {
        const response = await getPreviousOrders();
        setPreviousOrders(response.data); // Assuming the API returns an array of previous orders
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching previous orders:', error);
      }
    }

    fetchPreviousOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {previousOrders.map((order) => (
            <li key={order._id}>
              Order ID: {order.orderId}<br />
              Date: {order.createdAt}<br />
              Total: ${order.orderTotal.toFixed(2)}<br />
              
              <ul>
                {order.OrderListItem.map((lineItem) => (
                  <li key={OrderListItem._id}>
                    Qty: {OrderListItem.qty}<br />
                    Item Name: {OrderListItem.item.name}<br />
                    Price: ${OrderListItem.item.price.toFixed(2)}<br />
                    Color: {OrderListItem.subItem.color}<br />
                    Size: {OrderListItem.subItem.size}<br />
                    Ext. Price: ${OrderListItem.extPrice.toFixed(2)}<br />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
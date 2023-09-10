import React, { useState, useEffect } from 'react';
import styles from './OrderHistoryPage.module.scss';
import { getOrderHistory } from '../../utilities/orders-api';

export default function OrderHistoryPage({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const data = await getOrderHistory();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, [user]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className={styles.order}>
          <p>Order ID: {order.id}</p>
          <p>Date: {order.date}</p>
          <p>Total: {order.total}</p>
        </div>
      ))}
    </div>
  );
}

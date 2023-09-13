import React, { useState, useEffect } from 'react';
import styles from './OrderHistoryPage.module.scss';
import OrderList from '../../components/OrderList/OrderList'

export default function OrderHistoryPage({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(`/api/orders/${user.id}`);
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, [user]);

  return (
    <div className={styles.container}>
      <h1>Order History</h1>
      <OrderList orders={orders} /> 
    </div>
  );
}

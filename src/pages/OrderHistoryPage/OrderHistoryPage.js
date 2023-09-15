import React, { useState, useEffect } from 'react';
import styles from './OrderHistoryPage.module.scss';
import { getOrderHistory } from '../../utilities/orders-api';
import OrderList from '../../components/OrderList/OrderList';

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await getOrderHistory(); 
        console.log(response);
        if (response.status === 200) {
          const data = await response.json();
          setOrders(data);
        } else {
          throw new Error(`Error fetching order history - Status ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Order History</h1>
      <OrderList orders={orders} /> 
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import styles from './CartPage.module.scss'; // Import the SCSS module
import LineItem from '../../components/LineItem'; // Import your CartItem component
import { getCart } from '../../utilities/orders-api'; 

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the customer's current cart when the component mounts
    async function fetchCart() {
      try {
        const cartData = await getCart(); // Replace with your API call
        setCart(cartData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setIsLoading(false);
      }
    }

    fetchCart();
  }, []);

  return (
    <div className={styles.cartPage}>
      <h1>Your Shopping Cart</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <LineItem
              key={item.id} // Assuming each item has a unique identifier
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import styles from './CartPage.module.scss'; // Import the SCSS module
import CartItem from './CartItem'; // Import your CartItem component
import { getCustomerCart } from '../../api'; // Import your API function for fetching the cart

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the customer's current cart when the component mounts
    async function fetchCart() {
      try {
        const cartData = await getCustomerCart(); // Replace with your API call
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
    <NavBar />
    <div className={styles.cartPage}>
      <h1>Your Shopping Cart</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <CartItem
              key={item.id} // Assuming each item has a unique identifier
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
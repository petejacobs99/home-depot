import styles from './CartDetail.module.scss';
import { getCart } from '../../utilities/orders-api';
import { useState, useEffect } from "react";
import LineItem from '../../components/LineItem/LineItem'; // Import the LineItem component

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
  const [fetchedCart, setFetchedCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      /* try {
        const fetchedCart = await getCart();
        setFetchedCart(fetchedCart);
      } catch (error) {
        console.error('Error fetching cart:', error);
      } */
      const fetchedCart = await getCart();
      setFetchedCart(fetchedCart);
      console.log(fetchedCart)
    };
    fetchCart();
  }, []);

  return (
    <>
      {cart || fetchedCart ? (
        <div className={styles.container}>
          {/* <h1>YOUR CART</h1> */}
          {(cart || fetchedCart).lineItems.map((item) => (
            <LineItem
              key={item._id}
              item={cart ? cart.lineItems[item] : fetchedCart.lineItems[item]}
              handleChangeQty={handleChangeQty}
            />
          ))}
          <button onClick={handleCheckout} className={styles.checkoutBtn}>
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>YOUR CART IS EMPTY.</p>
      )}
    </>
  );
}
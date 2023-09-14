import styles from './OrderPage.module.scss';
import CartDetail from '../../components/CartDetail/CartDetail';
import { getCart } from '../../utilities/orders-api';
import { useState, useEffect } from "react";

export default function OrderPage({ cart, handleChangeQty, handleCheckout, handleAddToWishList }) {
  const [fetchedCart, setFetchedCart] = useState(null);
  /* const itemsAmount = fetchedCart.lineItems.length; */

  useEffect(() => {
    const fetchCart = async () => {
      const fetchedCart = await getCart();
      setFetchedCart(fetchedCart);
    };
    fetchCart();
  }, []);

  return (
    <div className={styles.container}>
      {/* <h1>Your Cart ({itemsAmount} items)</h1> */}
      <h1>Your Cart</h1>
      {cart || fetchedCart ? (
        <div className={styles.container}>
          <CartDetail
            cart={cart}
            handleChangeQty={handleChangeQty}
            fetchedCart={fetchedCart}
            setFetchedCart={setFetchedCart}
            handleAddToWishList={handleAddToWishList}
          />
          <div className={styles.total}>TOTAL: ${fetchedCart.orderTotal.toFixed(2)}</div>
          <br />
          <button onClick={handleCheckout} className={styles.checkoutBtn}>
            CHECKOUT
          </button>
        </div>
      ) : (
        <p>YOUR CART IS EMPTY.</p>
      )}
    </div>
  );
}



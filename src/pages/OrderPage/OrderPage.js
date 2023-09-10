import styles from './OrderPage.module.scss';

export default function OrderPage({ cart, handleChangeQty, handleCheckout }) {
  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      {Object.keys(cart).map((itemId) => (
        <div key={itemId} className={styles.form}>
          <span>Item: {cart[itemId].name}</span>
          <span>Quantity: {cart[itemId].quantity}</span>
          <button className={styles.editBtn} onClick={() => handleChangeQty(itemId, cart[itemId].quantity + 1)}>+</button>
          <button className={styles.editBtn} onClick={() => handleChangeQty(itemId, cart[itemId].quantity - 1)}>-</button>
        </div>
      ))}
      <button className={styles.editBtn} onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}


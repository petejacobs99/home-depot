import styles from './CartDetail.module.scss';

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
  return (
    <>
      {cart || fetchedCart ? (
        <div className={styles.container}>
          <h1>YOUR CART</h1>
          {Object.keys(cart).map((itemId) => (
            <div key={itemId} className={styles.item}>
              <span>Item: {cart[itemId].name}</span>
              <span>Quantity: {cart[itemId].quantity}</span>
              <button onClick={() => handleChangeQty(itemId, cart[itemId].quantity + 1)}>+</button>
              <button onClick={() => handleChangeQty(itemId, cart[itemId].quantity - 1)}>-</button>
            </div>
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
import { useEffect } from 'react'
import styles from './OrderPage.module.scss';
import CartDetail from '../../components/CartDetail/CartDetail';

export default function OrderPage({ user, cart, handleChangeQty, handleCheckout, handleAddToWishList }) {
  useEffect(function () {
    
  }, [cart])
  const showOrder = () => (
    <div className={styles.container}>
        <CartDetail
          user={user}
          cart={cart}
          handleChangeQty={handleChangeQty}
          handleAddToWishList={handleAddToWishList}
        />
        <div className={styles.total}>TOTAL: ${cart.orderTotal.toFixed(2)}</div>
        <button className={styles.checkoutBtn} onClick={() => handleCheckout()}>
          CHECKOUT
        </button>
    </div>
  )
  const emptyCart = () => (
    <p>YOUR CART IS EMPTY.</p>
  )

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      {cart.lineItems && cart.lineItems.length ? showOrder() : emptyCart()}
    </div>
  )
}
import styles from './OrderPage.module.scss';
import CartDetail from '../../components/CartDetail/CartDetail';

export default function OrderPage({ cart, handleChangeQty, handleCheckout }) {
  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <CartDetail
        cart={cart}
        handleChangeQty={handleChangeQty}
        handleCheckout={handleCheckout}
      />
    </div>
  );
}



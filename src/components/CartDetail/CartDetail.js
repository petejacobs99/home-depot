import styles from './CartDetail.module.scss';
import { getCart } from '../../utilities/orders-api'

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
  
  useEffect(() => {
    const getCart = async () => {
      try {
        const cart = await getCart()
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    getCart();
  }, [user]);

  
  
  return (
    <>
      {cart ?
        <div className={styles.container}>
          <h1>YOUR CART</h1>
          {Object.keys(cart).map((itemId) => (
            <div key={itemId} className={styles.item}>
              <img src={cart[itemId].img}></img>
              <span>Item: {cart[itemId].name}</span>
              <span>Color: {cart[itemId].color}</span>
              <span>Quantity: {cart[itemId].quantity}</span>
              <button onClick={() => handleChangeQty(itemId, cart[itemId].quantity + 1)}>+</button>
              <button onClick={() => handleChangeQty(itemId, cart[itemId].quantity - 1)}>-</button>
            </div>
          ))}
          <button onClick={handleCheckout} className={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
        :
        <p>YOUR CART IS EMPTY.</p>
    }
    </>
  );
}

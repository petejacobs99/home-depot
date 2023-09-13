import styles from './CartDetail.module.scss';
import { getCart } from '../../utilities/orders-api';
import LineItem from '../LineItem/LineItem'; // Import the LineItem component

export default function CartDetail({ cart, handleChangeQty, handleCheckout }) {
  const [fetchedCart, setFetchedCart] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const fetchedCart = await getCart();
        setFetchedCart(fetchedCart);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  return (
    <>
      {cart || fetchedCart ? (
        <div className={styles.container}>
          <h1>YOUR CART</h1>
          {Object.keys(cart || fetchedCart).map((itemId) => (
            <LineItem
              key={itemId}
              item={cart ? cart[itemId] : fetchedCart[itemId]}
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
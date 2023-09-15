import { useState } from 'react';
import styles from './LineItem.module.scss';

export default function LineItem({ user, item, handleAddToWishlist, handleChangeQty }) {
  const [qty, setQty] = useState(item.qty)
  const handleChange = (e) => {
    setQty(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChangeQty(item.item._id, qty)
  }
  return (
    <div className={styles.lineItem}>
      <div className={styles.leftSide}>
        <div className={styles.itemImage}>
          <img className={styles.image} src={item.item.img} alt={item.item.name} />
        </div>
        <div className={styles.name}>
          <h2>{item.item.name}</h2>
        </div>
      </div>
      <div className={styles.rightSide}>
        <form className={styles.quantity} onSubmit={(e) => handleSubmit(e)}>
            <input className={styles.quantity} type='number' value={qty} onChange={(e) => handleChange(e)} />
            <div>
              <input className={styles.quantityBtn} type='submit' value="CHANGE QUANTITY" />
              <button className={styles.quantityBtn} onClick={() => handleChangeQty(item.item._id, 0)}>REMOVE FROM CART</button>
            </div>
        </form>
        <div className={styles.farRight}>
          <p className={styles.price}>${item.extPrice.toFixed(2)}</p>
          {user.isGuest ? '' : (<button className={styles.wishlist} onClick={() => handleAddToWishlist()}>ADD TO WISH LIST</button>)}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import styles from './LineItem.module.scss'; // Import the SCSS module
import { addToWishlist } from '../../utilities/wishlist-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function LineItem({ item, setFetchedCart, handleAddToWishlist, /* handleChangeQty */ }) {
  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setFetchedCart(updatedCart);
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
        <div className={styles.quantity}>
          <span
            className={styles.quantityBtn}
            onClick={() => handleChangeQty(item.item._id, item.qty - 1)}
          >−</span>
          <span className={styles.quantitySpan}>{item.qty}</span>
          <span
            className={styles.quantityBtn}
            onClick={() => handleChangeQty(item.item._id, item.qty + 1)}
          >+</span>
        </div>
        <div className={styles.farRight}>
          <p className={styles.price}>${item.extPrice.toFixed(2)}</p>
          <span className={styles.wishlist} onClick={handleAddToWishlist}>ADD TO WISH LIST</span>
        </div>
      </div>
    </div>
  );
}
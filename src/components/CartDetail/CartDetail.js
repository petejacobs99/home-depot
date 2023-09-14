import styles from './CartDetail.module.scss';
import { getCart } from '../../utilities/orders-api';
import { useState, useEffect } from "react";
import LineItem from '../../components/LineItem/LineItem'; // Import the LineItem component

export default function CartDetail({ cart, handleChangeQty, fetchedCart, setFetchedCart, handleAddToWishList }) {
  const items = fetchedCart.lineItems.map(item => 
    <LineItem
      key={item._id}
      item={item}
      handleChangeQty={handleChangeQty}
      fetchedCart={fetchedCart}
      setFetchedCart={setFetchedCart}
      handleAddToWishList={handleAddToWishList}
    />
  )

  return (
    <div className={styles.lineItems}>{items}</div>
  );
}
import styles from "./SearchResultsItem.module.scss";
import { useState } from "react";
import * as ordersAPI from "../../utilities/orders-api";

export default function ItemListItem({
  searchResultsItem,
  /* handleAddToOrder, */
}) {
  const [filledHeart, setFilledHeart] = useState(false);
  const [wishListItem, setWishListItem] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleHeartHover = () => {
    setFilledHeart(!filledHeart);
  };

  /* const handleAddToCart = () => {
    alert("Added to cart!");
    setInCart(true);
  }; */

  async function handleAddToCart(itemId) {
    await ordersAPI.addToCart(itemId);
    setInCart(true);
  }

  const handleHeartClick = () => {
    if (!wishListItem) {
      alert("Added to Wish List!");
      setWishListItem(true);
    } else {
      alert("Removed from Wish List!");
      setWishListItem(false);
    }
  };

  let filledStars = [...Array(4)].map((_, i) => <span key={i}>★</span>);
  let emptyStars = [...Array(1)].map((_, i) => <span key={i}>☆</span>);

  return (
    <div className={styles.App}>
      <div className={styles.searchResultsItem}>
        <div
          className={styles.heart}
          onMouseEnter={handleHeartHover}
          onMouseLeave={handleHeartHover}
          onClick={handleHeartClick}
        >
          {filledHeart || wishListItem ? "♥" : "♡"}
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={searchResultsItem.img.includes('imgur') ? searchResultsItem.img
              : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            }
          />
        </div>
        <div className={styles.itemInfoLine1}>
          <div className={styles.name}>
            {searchResultsItem.name}
          </div>
          <div className={styles.price}>
            ${searchResultsItem.price}
          </div>
        </div>
        <div className={styles.itemInfoLine2}>
          <div className={styles.rating}>
            {filledStars}
            {emptyStars}
          </div>
          {inCart ? (
            <button className={styles.btnDisabled}>IN CART</button>
          ) : (
            <button className={styles.btnSm} onClick={handleAddToCart}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
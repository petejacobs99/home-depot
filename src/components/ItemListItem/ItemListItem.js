import styles from "./ItemListItem.module.scss";
import { useState } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import { useNavigate, useParams } from 'react-router-dom';

export default function ItemListItem({
  itemListItem,
  /* handleAddToOrder, */
  setItemListItems,
  itemListItems
}) {
  const [filledHeart, setFilledHeart] = useState(false);
  const [wishListItem, setWishListItem] = useState(false);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

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

  const handleImageClick = () => {
    navigate(`/home/${params.depName}/${params.depName}/${itemListItem._id}`);
  }

  let filledStars = [...Array(4)].map((_, i) => <span key={i}>★</span>);
  let emptyStars = [...Array(1)].map((_, i) => <span key={i}>☆</span>);

  return (
    <div className={styles.App}>
      <div className={styles.itemListItem}>
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
            src={itemListItem.img.includes('imgur') ? itemListItem.img
              : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            }
            onClick={handleImageClick}
          />
        </div>
        <div className={styles.itemInfoLine1}>
          <div className={styles.name}>
            {itemListItem.name}
            {/* Item */}
          </div>
          <div className={styles.price}>
            {/* <span>$0.00</span> */}
            ${itemListItem.price}
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
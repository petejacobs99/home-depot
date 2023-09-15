import styles from "./ItemListItem.module.scss";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import * as wishAPI from "../../utilities/wishlist-api";
import { useNavigate, useParams } from 'react-router-dom';
import Heart from "../Heart/Heart";
import StaticStars from "../StaticStars/StaticStars";

export default function ItemListItem({
  itemListItem,
  /* handleAddToOrder, */
  setItemListItems,
  itemListItems,
  setWishlist
}) {
  /* const [filledHeart, setFilledHeart] = useState(false); */
  /* const [wishListItem, setWishListItem] = useState(false); */
  const [inCart, setInCart] = useState(false);
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(function () {
    async function getRating() {
      const reviews = await reviewsAPI.getReviews(itemListItem._id);
      setRating(reviews.mean);
    }
    getRating();
  }, []);

  /* const handleHeartHover = () => {
    setFilledHeart(!filledHeart);
  }; */

  /* const handleAddToCart = () => {
    alert("Added to cart!");
    setInCart(true);
  }; */

  async function handleAddToOrder() {
    await ordersAPI.addToCart(itemListItem._id);
    setInCart(true);
  }

  /* const handleHeartClick = () => {
    if (!wishListItem) {
      alert("Added to Wish List!");
      setWishListItem(true);
    } else {
      alert("Removed from Wish List!");
      setWishListItem(false);
    }
  }; */

  async function handleAddToWishList() {
    const data = await wishAPI.addToWishlist(itemListItem._id)
    setWishlist(data)
  }

  async function handleRemoveFromWishList() {
    const data = await wishAPI.removeFromWishlist(itemListItem._id)
    setWishlist(data)
  }

  const handleImageClick = () => {
    navigate(`/home/${params.depName}/${params.catName}/${itemListItem._id}`);
  }

  let filledStars = [...Array(4)].map((_, i) => <span key={i}>★</span>);
  let emptyStars = [...Array(1)].map((_, i) => <span key={i}>☆</span>);

  return (
    <div className={styles.App}>
      <div className={styles.itemListItem}>
        {/* <div
          className={styles.heart}
          onMouseEnter={handleHeartHover}
          onMouseLeave={handleHeartHover}
          onClick={handleHeartClick}
        >
          {filledHeart || wishListItem ? "♥" : "♡"}
        </div> */}
        <div className={styles.heart}>
          <Heart 
            handleAddToWishList={handleAddToWishList}
            handleRemoveFromWishList={handleRemoveFromWishList}
          />
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
            {/* {filledStars}
            {emptyStars} */}
            <StaticStars rating={rating}/>
          </div>
          {inCart ? (
            <button className={styles.btnDisabled}>IN CART</button>
          ) : (
            <button className={styles.btnSm} onClick={handleAddToOrder}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
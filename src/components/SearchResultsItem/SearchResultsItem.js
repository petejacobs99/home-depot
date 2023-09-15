import styles from "./SearchResultsItem.module.scss";
import { useState, useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import * as reviewsAPI from "../../utilities/reviews-api";
import * as wishAPI from "../../utilities/wishlist-api";
import { useNavigate } from 'react-router-dom';
import Heart from "../Heart/Heart";
import StaticStars from "../StaticStars/StaticStars";

export default function ItemListItem({
  searchResultsItem,
  /* handleAddToOrder, */
  setWishlist
}) {
  /* const [filledHeart, setFilledHeart] = useState(false);
  const [wishListItem, setWishListItem] = useState(false); */
  const [inCart, setInCart] = useState(false);
  const [rating, setRating] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getRating() {
      const reviews = await reviewsAPI.getReviews(searchResultsItem._id);
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
    await ordersAPI.addToCart(searchResultsItem._id);
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
    const data = await wishAPI.addToWishlist(searchResultsItem._id)
    setWishlist(data)
  }

  async function handleRemoveFromWishList() {
    const data = await wishAPI.removeFromWishlist(itemListItem._id)
    setWishlist(data)
  }

  const handleImageClick = () => {
    navigate(`/home/${searchResultsItem.category.department.name}/${searchResultsItem.category.name}/${searchResultsItem._id}`);
  }

  let filledStars = [...Array(4)].map((_, i) => <span key={i}>★</span>);
  let emptyStars = [...Array(1)].map((_, i) => <span key={i}>☆</span>);

  return (
    <div className={styles.App}>
      <div className={styles.searchResultsItem}>
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
            src={searchResultsItem.img.includes('imgur') ? searchResultsItem.img
              : "https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            }
            onClick={handleImageClick}
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
import "./ItemListItem.module.scss";
import { useState } from "react";

export default function ItemListItem({
  itemListItem,
  /* handleAddToOrder, */
  setItemListItems,
  itemListItems
}) {
  const [filledHeart, setFilledHeart] = useState(false);
  const [wishListItem, setWishListItem] = useState(false);
  const [inCart, setInCart] = useState(false);

  const handleHeartHover = () => {
    setFilledHeart(!filledHeart);
  };

  const handleAddToOrder = () => {
    alert("Added to cart!");
    setInCart(true);
  };

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
    <div className="App">
      <div className="itemListItem">
        <div
          className="heart"
          onMouseEnter={handleHeartHover}
          onMouseLeave={handleHeartHover}
          onClick={handleHeartClick}
        >
          {filledHeart || wishListItem ? "♥" : "♡"}
        </div>
        <div className="imageContainer">
          <img
            className="image"
            src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
            alt="bucket"
            height="100vmin"
          />
        </div>
        <div className="itemInfoLine1">
          <div className="name">
            {/* {itemListItem.name} */}
            Item
          </div>
          <div className="price">
            <span>$0.00</span>
          </div>
        </div>
        <div className="itemInfoLine2">
          <div className="rating">
            {filledStars}
            {emptyStars}
          </div>
          {inCart ? (
            <button className="btn-disabled">IN CART</button>
          ) : (
            <button className="btn-sm" onClick={handleAddToOrder}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
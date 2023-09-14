/* import styles from './Heart.module.scss'; */
import { useState } from "react";

export default function Heart({ /* filledHeart, setFilledHeart, */ handleAddToWishList, handleRemoveFromWishList }) {
    const [wishListItem, setWishListItem] = useState(false);
    const [filledHeart, setFilledHeart] = useState(false);

    const handleHeartHover = () => {
        setFilledHeart(!filledHeart);
    };

    const handleHeartClick = () => {
        if (!wishListItem) {
            /* alert("Added to Wish List!"); */
            handleAddToWishList();
            setWishListItem(true);
        } else {
            /* alert("Removed from Wish List!"); */
            handleRemoveFromWishList();
            setWishListItem(false);
        }
    };

    return (
        <div
            onMouseEnter={handleHeartHover}
            onMouseLeave={handleHeartHover}
            onClick={handleHeartClick}
        >
            {filledHeart || wishListItem ? "♥" : "♡"}
        </div>
    );
}